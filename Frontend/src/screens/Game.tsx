import { ChessBoard } from "../components/ChessBoard"

export const Game = () => {
    return (
        <div className="flex justify-center">
            <div className="pt-8 max-w-screen-lg">
                <div className="grid grid-cols-6 gap4 w-full bg-red-400">
                    <div className="col-span-4 bg-red-200 w-full">
                        <ChessBoard/>
                    </div>
                    <div className="col-span-2 bg-green-200 w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-20 text-2xl rounded">
                            Play
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}