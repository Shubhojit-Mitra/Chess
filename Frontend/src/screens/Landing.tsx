import { useNavigate } from "react-router-dom"

export const Landing = () => {
    const navigate = useNavigate();
    return (
            <div className="mt-8 pt-10 flex justify-center">
                <div className="pt-2 max-w-screen-lg">
                    <div className="grid grid-cols-1 gap4 md:grid-cols-2">
                        <div className="flex justify-center">
                            <img src={"/chess-board.jpeg"}
                            className="max-w-96 w-[360px] p-2 rounded-lg border-2 border-[#64e1d9] shadow-lg shadow-[#64e1d9]/50 dark:border-[#64e1d9] dark:shadow-[#64e1d9]/90" />
                        </div>
                        <div className="pt-10">
                            <div className="flex justify-center">
                                <h1 className="text-5xl font-bold mt-10 text-white">
                                Play Chess Online With Your Friends
                                </h1>
                            </div>
                            <div className="mt-10">
                                <button onClick={() => {
                                    navigate('/Game')
                                } } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 text-2xl rounded hover:shadow-lg hover:shadow-[#64e1d9]/50 hover:border-[#64e1d9] transition duration-500 ease-in-out">
                                    Play Online
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
