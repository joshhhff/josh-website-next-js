'use client';

import { JSX } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    as?: keyof JSX.IntrinsicElements;
    style?: React.CSSProperties;
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedText({ as: Tag = 'p', style, children, className }: AnimatedTextProps) {
    const MotionTag = motion(Tag as keyof JSX.IntrinsicElements);

    return (
        <MotionTag
            className={className ?? ''}
            style={style ?? {}}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >{children}</MotionTag>
    );
}