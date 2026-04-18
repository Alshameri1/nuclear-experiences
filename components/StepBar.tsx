
export default function StepBar({title, number}: {title: string, number: number}) {
    return (
        <div className='rowFlex gap-2 text-lg text-nuclear-cyan w-full'>
            <span className='size-6 md:size-8 lg:size-10 rounded-full centerFlex font-normal border border-nuclear-cyan/30'>{number}</span>
            <span className='w-full py-3 px-5 rounded-full border border-nuclear-cyan/30 text-start font-medium'>{title}</span>
        </div>
    )
}
