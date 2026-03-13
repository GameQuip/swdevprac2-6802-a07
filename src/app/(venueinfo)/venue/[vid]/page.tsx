import Image from "next/image";
import { venueMap } from "@/data/mockData";

interface VenueDetailProps {
  params: Promise<{ vid: string }>;
}

export async function generateStaticParams() {
  return Array.from(venueMap.keys()).map((vid) => ({
    vid: vid,
  }));
}

export default async function VenueDetailPage({ params }: VenueDetailProps) {
  const { vid } = await params;
  const venue = venueMap.get(vid);

  if (!venue) {
    return <div className="p-10 text-center">Venue not found!</div>;
  }

  return (
    <main className=" p-10 flex flex-col md:flex-row items-start justify-center gap-10 min-h-[100svh] max-w-[80%] mx-auto">
      <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-2xl rounded-2xl h-[400px]">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          {venue.name}
        </h1>

        <div className="p-4 bg-slate-100 rounded-lg inline-block self-start">
          <p className="text-sm font-mono text-slate-500">VENUE ID: {vid}</p>
        </div>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Experience the perfect blend of elegance and functionality. This venue
          is designed to host your most memorable events with state-of-the-art
          facilities.
        </p>
      </div>
    </main>
  );
}
