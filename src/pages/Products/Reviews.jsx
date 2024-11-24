import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { user } from "@/assets/index";


const reviews = [
    {
        name: "Mohamed Ahmed",
        username: "@jack",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
    {
        name: "Mohamed Ahmed",
        username: "@jill",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
    {
        name: "Mohamed Ahmed",
        username: "@john",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
    {
        name: "Mohamed Ahmed",
        username: "@jane",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
    {
        name: "Mohamed Ahmed",
        username: "@jenny",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
    {
        name: "Mohamed Ahmed",
        username: "@james",
        body: "“تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت ترغب بشرائة لا تتردد انا انصح به وبشدة ”",
        img: user,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img 
                    className="rounded-full" 
                    loading="lazy" 
                    width="52" 
                    height="52" 
                    alt="user" 
                    src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-main dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium  dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="py-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
