import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
}

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverColor: string;
    coverUrl: string
}

const BookCover = ({ className, variant = "regular", coverColor = "#012B48", coverUrl = "https://palcehold.com/400*600.png" }: Props) => {
    return (
        <div className={cn(inputs: 'relative transition-all duration-300', variantStyles[variant])}>
            <h2 className='font-bebas-neue text-4xl text-light-100'>
                Book side SVG
            </h2>
            <div className='absolute z-10' style={{left:'12%', width:'87.5%',height:"88%" }}>
                <Image src={coverUrl} alt='Book cover' fill className='rounded-sm object-fill'/>
            </div>
        </div> 
    )
}
export default BookCover  