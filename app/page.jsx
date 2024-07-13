import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1
                className="head_text text-center">
                discover and share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    AI POWERED PROPMPTS
                </span>
            </h1>
            <p className="desc text-center">
                Promptpia is an open source AI prompting tool...
            </p>
            <Feed />
        </section>
    )
}

export default Home