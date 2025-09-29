interface Props {
    index: number,
}

function ProjectSection(props: Props) {
    const {} = props

    return (
        <section key={props.index} className="container">
            Project
        </section>
    )
}

export default ProjectSection
