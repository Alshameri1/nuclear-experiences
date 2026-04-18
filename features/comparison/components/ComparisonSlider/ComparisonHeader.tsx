interface Props {
    vs: string;
    reactorText: string;
    bombText: string;
    description: string;
}

export function ComparisonHeader({ vs, reactorText, bombText, description }: Props) {
    return (
        <div className="text-center colFlex items-center gap-4 fade">
            <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-nuclear-blue">{reactorText}</span>
                <span className="text-muted-foreground"> {vs} </span>
                <span className="text-nuclear-red">{bombText}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>
        </div>
    );
}