const NotLogin = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[64.5vh] font-sanchez dark:bg-slate-900 dark:text-white">
      <div className="flex items-center h-20">
        <p className="text-2xl font-semibold mr-2 md:text-4xl xl:text-5xl">is not Login</p>
        <i className="fa fa-remove text-red-500 text-xl border rounded-full border-red-500 w-6 h-6 flex justify-center items-center md:text-2xl md:border-2 md:w-8 md:h-8 xl:text-3xl xl:w-10 xl:h-10"></i>
      </div>
      <div className="flex flex-col text-xl w-48 ml-8 md:text-2xl md:w-64 xl:text-3xl xl:w-72 xl:ml-0 xl:mt-4">
        <h1>User Name : johnd</h1>
        <h1>Password : m38rmF$</h1>
      </div>
    </div>
  );
};

export default NotLogin;
