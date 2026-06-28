"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className = "", delay = 0, y = 24 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, delay, ease }}>{children}</motion.div>;
}

const staggerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: .1, delayChildren: .08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease } },
};

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={staggerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-70px" }}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={itemVariants}>{children}</motion.div>;
}

type SectionProps = ComponentPropsWithoutRef<"section"> & { container?: boolean; innerClassName?: string; reveal?: boolean };

export function Section({ children, className = "", container = true, innerClassName = "", reveal = true, ...props }: SectionProps) {
  const content = reveal ? <Reveal>{children}</Reveal> : children;
  return <section className={`section-pad relative ${className}`} {...props}>{container ? <div className={`container-site ${innerClassName}`}>{content}</div> : content}</section>;
}

type CardProps = ComponentPropsWithoutRef<"article"> & { children: ReactNode };

export function Card({ children, className = "", ...props }: CardProps) {
  return <motion.article className={`card ${className}`} variants={itemVariants} whileHover={{ y: -6 }} transition={{ duration: .35, ease }} {...props}>{children}</motion.article>;
}
