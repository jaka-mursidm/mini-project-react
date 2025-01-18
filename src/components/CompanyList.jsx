import React from "react";
import Card from "./Card";
import Button from "./Button";
const CompanyList = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-4 gap-3">
          <Card p="p-6">
            <div className="flex flex-col align-center justify-center">
              <div className="bg-slate-200 h-20 w-20"></div>
              <h3 className="font-medium text-xl my-3">Perusahaan 1</h3>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-between mt-6">
                <Button
                  textSize="text-xs"
                  bg="bg-gradient-to-l from-blue-400 to-blue-800"
                >
                  <p>Lihat lowongan</p>
                </Button>
                <span className="h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  20 Pekerjaan
                </span>
              </div>
            </div>
          </Card>
          <Card p="p-6">
            <div className="flex flex-col align-center justify-center">
              <div className="bg-slate-200 h-20 w-20"></div>
              <h3 className="font-medium text-xl my-3">Perusahaan 2</h3>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-between mt-6">
                <Button
                  textSize="text-xs"
                  bg="bg-gradient-to-l from-blue-400 to-blue-800"
                >
                  <p>Lihat lowongan</p>
                </Button>
                <span className="h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  20 Pekerjaan
                </span>
              </div>
            </div>
          </Card>
          <Card p="p-6">
            <div className="flex flex-col align-center justify-center">
              <div className="bg-slate-200 h-20 w-20"></div>
              <h3 className="font-medium text-xl my-3">Perusahaan 3</h3>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-between mt-6">
                <Button
                  textSize="text-xs"
                  bg="bg-gradient-to-l from-blue-400 to-blue-800"
                >
                  <p>Lihat lowongan</p>
                </Button>
                <span className="h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  20 Pekerjaan
                </span>
              </div>
            </div>
          </Card>
          <Card p="p-6">
            <div className="flex flex-col align-center justify-center">
              <div className="bg-slate-200 h-20 w-20"></div>
              <h3 className="font-medium text-xl my-3">Perusahaan 4</h3>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repudiandae impedit deleniti?
              </p>
              <div className="flex justify-between mt-6">
                <Button
                  textSize="text-xs"
                  bg="bg-gradient-to-l from-blue-400 to-blue-800"
                >
                  <p>Lihat lowongan</p>
                </Button>
                <span className="h-fit bg-slate-200 text-xs rounded-lg p-2 m-0">
                  20 Pekerjaan
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CompanyList;
