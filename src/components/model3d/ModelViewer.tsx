import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

type ModelViewerProps = {
  modelUrl: string;
};

// Component model có auto-scale + center
function Model({ modelUrl }: { modelUrl: string }) {
  const { scene } = useGLTF(modelUrl);

  useEffect(() => {
    // 🔹 Tính toán kích thước của model
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const center = new THREE.Vector3();
    box.getCenter(center);

    // 🔹 Di chuyển model về giữa khung nhìn
    scene.position.sub(center);

    // 🔹 Scale tự động để model không quá to hoặc quá nhỏ
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim; // model sẽ nằm gọn trong khung
    scene.scale.setScalar(scale);
  }, [scene]);

  return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      {/* Ánh sáng */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 4, 5]} intensity={1} />

      {/* Suspense để chờ model load */}
      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} />
      </Suspense>

      {/* Điều khiển xoay camera */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
