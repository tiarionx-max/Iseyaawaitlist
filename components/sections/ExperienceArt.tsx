import Image from "next/image";

interface ArtProps {
  priority?: boolean;
}

function artComponent(src: string, alt: string, width: number, height: number) {
  return function Art({ priority }: ArtProps) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  };
}

export const ExploreArt = artComponent(
  "/illustrations/explore-ogun.png",
  "A visitor overlooking Olumo Rock in Abeokuta",
  1190,
  640
);
export const WalletArt = artComponent(
  "/illustrations/wallet.png",
  "The ISEYAA Wallet app open on a phone at an Ogun market",
  1190,
  640
);
export const MarketplaceArt = artComponent(
  "/illustrations/marketplace.png",
  "A vendor selling Adire and crafts at an Ogun marketplace stall",
  774,
  598
);
export const EventsArt = artComponent(
  "/illustrations/events-ticketing.png",
  "A visitor scanning a ticket QR code at an Ogun event",
  774,
  598
);
export const StayArt = artComponent(
  "/illustrations/stay-in-ogun.png",
  "A couple arriving at a staycation home in Ogun",
  774,
  598
);
export const StudioArt = artComponent(
  "/illustrations/creative-studio.png",
  "ISEYAA's creative studio in Abeokuta",
  1198,
  600
);
