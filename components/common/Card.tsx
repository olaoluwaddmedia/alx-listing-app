import React from 'react';
import { CardProps } from '../../interfaces';


const Card: React.FC<CardProps> = ({ title, description, imageSrc, children }) => {
return (
<article className="rounded-2xl shadow-md overflow-hidden border bg-white">
{imageSrc && (
<img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
)}
<div className="p-4">
<h3 className="text-lg font-semibold">{title}</h3>
{description && <p className="text-sm mt-2">{description}</p>}
<div className="mt-3">{children}</div>
</div>
</article>
);
};