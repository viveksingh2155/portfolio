import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Vertex shader - handles dot deformation based on cursor position
const vertexShader = `
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uInfluenceRadius;
  uniform float uDeformationStrength;
  
  attribute vec3 originalPosition;
  
  varying float vDistanceFromMouse;
  
  void main() {
    vec3 pos = originalPosition;
    
    // Ambient floating animation - constant movement
    float offsetX = sin(uTime * 0.3 + originalPosition.x * 2.0) * 0.08;
    float offsetY = cos(uTime * 0.25 + originalPosition.y * 2.5) * 0.08;
    float offsetZ = sin(uTime * 0.4 + originalPosition.x + originalPosition.y) * 0.05;
    
    // Apply ambient movement
    pos.x += offsetX;
    pos.y += offsetY;
    pos.z += offsetZ;
    
    // Calculate distance from mouse in 2D space
    vec2 mousePos = uMouse;
    float distanceFromMouse = distance(pos.xy, mousePos);
    
    // Apply smooth falloff based on distance
    float influence = smoothstep(uInfluenceRadius, 0.0, distanceFromMouse);
    
    // Calculate direction from particle to mouse
    vec2 direction = normalize(mousePos - pos.xy);
    
    // Apply cursor deformation - particles follow cursor
    float deformation = influence * uDeformationStrength;
    pos.xy += direction * deformation;
    
    // Additional Z-axis displacement for depth
    pos.z += influence * 0.15;
    
    vDistanceFromMouse = distanceFromMouse;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    // Dynamic size with pulsing effect
    float pulse = sin(uTime * 0.5 + originalPosition.x * 3.0 + originalPosition.y * 2.0) * 0.3 + 0.7;
    gl_PointSize = 3.5 * pulse * (1.0 + influence * 0.8);
  }
`;

// Fragment shader - renders circular dots
const fragmentShader = `
  uniform vec3 uColor;
  uniform float uTime;
  varying float vDistanceFromMouse;
  
  void main() {
    // Create circular dots
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    if (dist > 0.5) {
      discard;
    }
    
    // Smooth edges
    float alpha = smoothstep(0.5, 0.3, dist);
    
    // Subtle opacity pulsing based on time and position
    float opacityVariation = sin(uTime * 0.8 + gl_FragCoord.x * 0.01 + gl_FragCoord.y * 0.01) * 0.15 + 0.85;
    
    // Increased opacity for better visibility with dynamic variation
    gl_FragColor = vec4(uColor, alpha * 0.7 * opacityVariation);
  }
`;

interface DotMeshProps {
  gridSize?: number;
  spacing?: number;
  influenceRadius?: number;
  deformationStrength?: number;
}

const DotMesh = ({
  gridSize = 40,
  spacing = 0.8,
  influenceRadius = 3.0,
  deformationStrength = 0.6,
}: DotMeshProps) => {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef(new THREE.Vector2(999, 999)); // Start off-screen
  const targetMouseRef = useRef(new THREE.Vector2(999, 999));
  const { viewport } = useThree();
  const prefersReducedMotion = useReducedMotion();

  // Create grid of dots
  const { positions, originalPositions } = useMemo(() => {
    const pos: number[] = [];
    const original: number[] = [];

    const halfGrid = gridSize / 2;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const posX = (x - halfGrid) * spacing;
        const posY = (y - halfGrid) * spacing;
        const posZ = 0;

        pos.push(posX, posY, posZ);
        original.push(posX, posY, posZ);
      }
    }

    return {
      positions: new Float32Array(pos),
      originalPositions: new Float32Array(original),
    };
  }, [gridSize, spacing]);

  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uMouse: { value: new THREE.Vector2(999, 999) },
      uTime: { value: 0 },
      uInfluenceRadius: { value: influenceRadius },
      uDeformationStrength: { value: deformationStrength },
      uColor: { value: new THREE.Color('#9999A5') }, // Lighter color for better visibility
    }),
    [influenceRadius, deformationStrength]
  );

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;

      // Convert mouse position to normalized device coordinates (-1 to +1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Convert to world space
      const worldX = x * (viewport.width / 2);
      const worldY = y * (viewport.height / 2);

      targetMouseRef.current.set(worldX, worldY);
    };

    const handleMouseLeave = () => {
      // Move mouse position off-screen when cursor leaves
      targetMouseRef.current.set(999, 999);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [viewport, prefersReducedMotion]);

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return;

    // Smooth mouse interpolation (lerp) for elastic feel
    mouseRef.current.lerp(targetMouseRef.current, 0.1);

    // Update uniforms
    uniforms.uMouse.value.copy(mouseRef.current);
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  if (prefersReducedMotion) {
    // Static dot grid for reduced motion
    return (
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={3} color="#9999A5" opacity={0.6} transparent sizeAttenuation={false} />
      </points>
    );
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-originalPosition"
          args={[originalPositions, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniformsNeedUpdate={true}
      />
    </points>
  );
};

export const CursorDotMesh = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: '#0A0A0B' }}
      >
        <DotMesh
          gridSize={70}
          spacing={0.45}
          influenceRadius={3.0}
          deformationStrength={0.7}
        />
      </Canvas>
    </div>
  );
};
