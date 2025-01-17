import Card from "./Card";
const JobList = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 ">
      <h2 className="text-2xl font-medium mb-4">
        Telusuri keahlian dan minat anda
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">Fullstack Developer</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-blue-200 text-blue-800 text-xs rounded-lg p-2 m-0">
                  Full time
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Developer
                </span>
              </div>
            </div>
          </Card>
        </a>
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">Back-end Developer</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-indigo-200 text-indigo-800 text-xs rounded-lg p-2 m-0">
                  Kontrak
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Developer
                </span>
              </div>
            </div>
          </Card>
        </a>
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">Front-end Developer</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-orange-200 text-orange-800 text-xs rounded-lg p-2 m-0">
                  Remote
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Developer
                </span>
              </div>
            </div>
          </Card>
        </a>
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">Fullstack Developer</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-blue-200 text-blue-800 text-xs rounded-lg p-2 m-0">
                  Full time
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Developer
                </span>
              </div>
            </div>
          </Card>
        </a>
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">Quality Assurance Tester</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-indigo-200 text-indigo-800 text-xs rounded-lg p-2 m-0">
                  Kontrak
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Tester
                </span>
              </div>
            </div>
          </Card>
        </a>
        <a href="#" className="group/card">
          <Card p="p-4" style="group-hover/card:border-blue-700">
            <div className="flex flex-col align-center justify-center">
              <h3 className="font-medium text-xl">UI/UX Developer</h3>
              <h5 className="mb-3 mt-1">PT. ABC</h5>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-end gap-2">
                <span className="w-fit mt-4 h-fit bg-orange-200 text-orange-800 text-xs rounded-lg p-2 m-0">
                  Remote
                </span>
                <span className="w-fit mt-4 h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  Web Design
                </span>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default JobList;
