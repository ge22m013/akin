import React, { useEffect, useRef } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface NeuronBackgroundProps {
  translateY?: MotionValue<string>;
}

const NeuronBackground: React.FC<NeuronBackgroundProps> = ({ translateY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let isTabActive = true;
    const neuronCount = window.innerWidth < 768 ? 50 : 100;
    const signalSpeed = 1.8;
    const connectionRadius = 280;
    let neurons: Neuron[] = [];
    let signals: Signal[] = [];

    const resizeCanvas = () => {
        canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
        neurons = [];
        signals = [];
        createNetwork();
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', () => {
        isTabActive = document.visibilityState === 'visible';
        if (isTabActive) animateCanvas(); else cancelAnimationFrame(animationFrameId);
    });

    class Neuron {
        x: number; y: number; vx: number; vy: number; radius: number;
        constructor(x?: number, y?: number) { this.x = x || Math.random()*canvas.width; this.y = y || Math.random()*canvas.height; this.vx = (Math.random()-0.5)*0.12; this.vy = (Math.random()-0.5)*0.12; this.radius = Math.random()*1.5+0.8; }
        draw(){ if (!ctx) return; ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); ctx.fillStyle = `rgba(0, 215, 254, 0.6)`; ctx.fill(); }
        update(){ this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>canvas.width)this.vx*=-1; if(this.y<0||this.y>canvas.height)this.vy*=-1; }
    }
    class Signal {
        x: number; y: number; startX: number; startY: number; endX: number; endY: number; progress: number; color: string; size: number;
        constructor(startX: number, startY: number, endX: number, endY: number) { this.x=startX; this.y=startY; this.startX=startX; this.startY=startY; this.endX=endX; this.endY=endY; this.progress=0; this.color='#00D7FE'; this.size=1.8; }
        update(){ this.progress+=0.01*signalSpeed; this.x=this.startX+(this.endX-this.startX)*this.progress; this.y=this.startY+(this.endY-this.startY)*this.progress; }
        draw(){ if (!ctx) return; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fillStyle=this.color; ctx.shadowBlur=10; ctx.shadowColor=this.color; ctx.fill(); ctx.shadowBlur=0; }
    }

    const createNetwork = () => { for (let i=0; i<neuronCount; i++) neurons.push(new Neuron()); };

    const animateCanvas = () => {
        if (!isTabActive || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i=0; i<neurons.length; i++) {
            const n1=neurons[i]; n1.update();
            for (let j=i+1; j<neurons.length; j++) {
                const n2=neurons[j];
                let dist=Math.hypot(n1.x-n2.x, n1.y-n2.y);
                if (dist<connectionRadius) {
                    ctx.beginPath(); ctx.moveTo(n1.x,n1.y); ctx.lineTo(n2.x,n2.y);
                    let opacity = 1-(dist/connectionRadius);
                    ctx.strokeStyle=`rgba(0, 215, 254, ${opacity*0.08})`; ctx.stroke();
                }
            }
        }
        neurons.forEach(n=>n.draw());
        if (signals.length < neuronCount/8 && Math.random() < 0.08) {
            const startNeuron=neurons[Math.floor(Math.random()*neurons.length)];
            const endNeuron=neurons[Math.floor(Math.random()*neurons.length)];
            if (startNeuron!==endNeuron) signals.push(new Signal(startNeuron.x,startNeuron.y,endNeuron.x,endNeuron.y));
        }
        signals = signals.filter(s=>{s.update();s.draw();return s.progress<1;});
        animationFrameId = requestAnimationFrame(animateCanvas);
    };
    
    resizeCanvas();
    animateCanvas();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div id="neuron-canvas" style={{ y: translateY }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  );
};

export default NeuronBackground;