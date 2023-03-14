import React from 'react'
import Header from '../../components/common/misc/Header'
import Quiz from '../../components/common/petquiz/Quiz'
import { QuizProvider } from "../../components/common/petquiz/QuizContext";

const PetQuiz = () => {


  return (
    <div className="font-nunito">
      <Header
        Title="Cat Care Quiz"
        Description="test how well you know how to care for a cat here!"
      />
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="text-5xl font-nunito relative px-10 py-10 font-bold transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Cat Quiz
        </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="text-5xl font-nunito relative px-10 py-10 font-bold transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dog Quiz
        </span>
      </button> */}
    </div>
  );
}

export default PetQuiz
