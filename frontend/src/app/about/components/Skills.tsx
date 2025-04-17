import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="px-2">
        {/* コアスキル */}
        <div className="space-y-6 mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex-grow">
            <h3 className="text-xl font-medium text-gray-700 mb-4 flex items-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Core Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* TypeScript */}
              <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                  >
                    <circle cx="256" cy="256" r="256" fill="#3178C6" />
                    <text
                      x="256"
                      y="290"
                      textAnchor="middle"
                      fontSize="170"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                      fontWeight="bold"
                    >
                      TS
                    </text>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  TypeScript
                </span>
              </div>
              {/* Next.js */}
              <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  Next.js
                </span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center bg-yellow-50 rounded-lg p-4">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-yellow-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  Python
                </span>
              </div>

              {/* Django */}
              <div className="flex flex-col items-center bg-green-50 rounded-lg p-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-green-800"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  Django
                </span>
              </div>
            </div>
          </div>

          {/* スキルセット */}
          <div className="mt-12 p-6 shadow-md rounded-lg relative bg-white/80">
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-4 flex items-center ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7 mr-3 text-blue-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <span className="text-gray-600">Skill Set</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Language */}
              <div className="p-4 rounded-lg bg-white shadow border border-gray-200">
                <h3 className="font-semibold flex items-center text-cyan-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                  </svg>
                  Language
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    HTML/CSS
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    GAS
                  </li>
                </ul>
              </div>

              {/* Framework */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <h3 className="font-semibold flex items-center text-purple-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  Framework
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    React
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Next.js
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Django
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Flask
                  </li>
                </ul>
              </div>

              {/* DataBase */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <h3 className="font-semibold flex items-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm1 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H2z" />
                  </svg>
                  Database
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Postgres
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    MySql
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    AWS Rds
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Subabase
                  </li>
                </ul>
              </div>

              {/* DevOps */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <h3 className="font-semibold flex items-center text-teal-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  DevOps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Docker
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Vercel
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Render
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Railway
                  </li>
                </ul>
              </div>

              {/* デザイン */}
              {/* <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <h3 className="font-semibold flex items-center text-pink-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                  Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    UI/UXデザイン
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Figma
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    レスポンシブデザイン
                  </li>
                </ul>
              </div> */}

              {/* その他 */}
              {/* <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <h3 className="font-semibold flex items-center text-amber-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                  </svg>
                  資格
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Git/GitHub
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    アジャイル開発
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    テスト駆動開発
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
