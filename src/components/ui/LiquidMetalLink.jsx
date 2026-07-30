import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders';
import React, { useEffect, useRef, useState } from 'react';

/**
 * LiquidMetalLink
 *
 * Wraps an <a> tag with the liquid-metal WebGL border animation.
 * Border radius is ZERO per design requirement.
 *
 * Props:
 *   href       – destination URL
 *   children   – button label content
 *   target     – link target (default _blank)
 *   className  – extra classes for the anchor
 *   ...rest    – forwarded to <a>
 */
export function LiquidMetalLink({
  href,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  ...rest
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const shaderRef = useRef(null);
  const shaderMount = useRef(null);
  const [dims, setDims] = useState({ w: 220, h: 40 });
  const wrapRef = useRef(null);

  // Measure the actual rendered button size after mount
  useEffect(() => {
    if (wrapRef.current) {
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setDims({
            w: Math.round(entry.contentRect.width),
            h: Math.round(entry.contentRect.height),
          });
        }
      });
      ro.observe(wrapRef.current);
      return () => ro.disconnect();
    }
  }, []);

  // Boot the WebGL shader
  useEffect(() => {
    const loadShader = () => {
      if (!shaderRef.current) return;
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
      }
      shaderMount.current = new ShaderMount(
        shaderRef.current,
        liquidMetalFragmentShader,
        {
          u_repetition: 4,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 45,
          u_scale: 8,
          u_shape: 1,
          u_offsetX: 0.1,
          u_offsetY: -0.1,
        },
        undefined,
        0.6,
      );
    };
    loadShader();
    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  // Inject canvas override styles once
  useEffect(() => {
    const id = 'lm-canvas-style';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id;
      s.textContent = `.lm-shader-wrap canvas { width:100%!important; height:100%!important; display:block!important; position:absolute!important; top:0!important; left:0!important; border-radius:0!important; }`;
      document.head.appendChild(s);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1.4);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(0.6);
  };
  const handleMouseDown = () => {
    setIsPressed(true);
    shaderMount.current?.setSpeed?.(2.4);
  };
  const handleMouseUp = () => {
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(isHovered ? 1.4 : 0.6);
  };

  return (
    /* Outer positioning wrapper — size is intrinsic to the link content */
    <div className="relative inline-block" style={{ perspective: '800px' }}>
      {/* WebGL shader layer — sits behind the link text */}
      <div
        ref={shaderRef}
        className="lm-shader-wrap"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          width: `${dims.w}px`,
          height: `${dims.h}px`,
        }}
      />

      {/* Travelling border highlight — 1px solid ring animating opacity */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 0,
          border: '1px solid rgba(0,0,0,0.18)',
          pointerEvents: 'none',
          zIndex: 1,
          boxShadow: isHovered
            ? isPressed
              ? 'inset 0 2px 4px rgba(0,0,0,0.25)'
              : '0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)'
            : 'none',
          transition: 'box-shadow 0.25s ease',
        }}
      />

      {/* The actual anchor link */}
      <a
        ref={wrapRef}
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          position: 'relative',
          zIndex: 2,
          transform: isPressed ? 'scale(0.98) translateY(1px)' : 'scale(1)',
          transition: 'transform 0.15s cubic-bezier(0.4,0,0.2,1)',
        }}
        className={className}
        {...rest}
      >
        {children}
      </a>
    </div>
  );
}

export default LiquidMetalLink;
