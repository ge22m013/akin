import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;
        if (container.childElementCount > 0) return; // Prevent re-initialization

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);
        camera.position.z = 5;

        const globeGroup = new THREE.Group();
        scene.add(globeGroup);

        const geometry = new THREE.SphereGeometry(2.5, 64, 64);
        const material = new THREE.PointsMaterial({ color: 0x00D7FF, size: 0.015, transparent: true, opacity: 0.7 });
        const sphere = new THREE.Points(geometry, material);
        globeGroup.add(sphere);

        let mouseX = 0, mouseY = 0, targetRotationX = 0, targetRotationY = 0;
        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            targetRotationY = mouseX * 0.2;
            targetRotationX = mouseY * 0.2;
        };
        document.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            globeGroup.rotation.y += 0.0005 + (targetRotationY - globeGroup.rotation.y) * 0.02;
            globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.02;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
             if (container) {
                camera.aspect = container.offsetWidth / container.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.offsetWidth, container.offsetHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            if(container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.5, maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />;
};

export default Globe;
