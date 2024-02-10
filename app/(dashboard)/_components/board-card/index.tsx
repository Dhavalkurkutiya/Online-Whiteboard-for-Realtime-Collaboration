"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
};

export const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}: BoardCardProps) => {

    const { userId } = useAuth();
   const authorLabel = userId === authorId ? "You" : authorName;
   const createdAtLabel = formatDistanceToNow(createdAt, {
     addSuffix: true 
    });


    return (
        <Link href={`/board/${id}`}>
            <div className="grup aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />
                   <Overlay />
                </div>
                <Footer 
                isFavorite={isFavorite}
                title={title}
                authorLabel={authorLabel}
                createdAtLabel={createdAtLabel}
                onClick={() => {}}
                disabled={false}
                />
            </div>
        </Link>
    );
}
BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="grup aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
        </div>
    );
}