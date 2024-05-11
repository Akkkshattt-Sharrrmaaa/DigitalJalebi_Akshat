
function Banner(){


    return (
        <section className="bg-gray-50">
            <div className="mx-auto  max-w-screen-xl px-4 py-20 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Digital Jalebi <br/>
                        <strong className="font-extrabold text-blue-800 sm:block py-5"> Akshat Sharma </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        This project has been created by Akshat Sharma as a submission of the online assessement by Digital Jalebi Labs for the ReactJS Developer position.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">


                        <a
                            href="https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"
                            target="_blank"
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"

                        >
                            Connect With Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;