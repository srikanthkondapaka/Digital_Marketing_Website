'use client';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || !items.length) return null;

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link href="/" className="breadcrumb-link" title="Home">
            <Home size={13} className="breadcrumb-home-icon" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="breadcrumb-item">
              <ChevronRight size={12} className="breadcrumb-separator" />
              {isLast || !item.href ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="breadcrumb-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
