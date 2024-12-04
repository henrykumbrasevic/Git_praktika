const UpcomingEvents = () => {

    return (
        <>
            <div>
                <div className="justify-">
                    <div>
                        <h1 className="text-[50px] font-bold">Our Upcoming Events</h1>
                    </div>
                    <div>
                        <p className="place-items-middle">
                            We believe that we are big not because of us but because of them, they are the ones who motivate us to continue to innovate to provide a quality coffee taste and comfortable space that is getting better every day.</p>
                    </div>
                </div>

                <div className="flex gap-5 justify-center ">
                    <div>
                        <img src="./src/images/coffee.png" alt="coffee" className="w-80 h-80" />
                    </div>
                    <div>
                        <img src="./src/images/coffee_machine.png" alt="coffee_machine" className="w-80 h-80" />
                    </div>
                    <div>
                        <img src="./src/images/coffee_beans.png" alt="coffee_beans" className="w-80 h-80" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default UpcomingEvents