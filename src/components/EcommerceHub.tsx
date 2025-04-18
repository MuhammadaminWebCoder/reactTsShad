import { Bell, ChevronDown, ChevronUp, Search } from "lucide-react"
import { Skeleton } from "../components/ui/skeleton";
import colbaBrand from '../assets/ColbaImg.png'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart,Area,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 240 },
  { name: 'Feb', uv: 300, pv: 139 },
  { name: 'Mar', uv: 500, pv: 580 },
  { name: 'Apr', uv: 478, pv: 390 },
  { name: 'May', uv: 589, pv: 480 },
];

const datas = [
  { value: 30 },
  { value: 25 },
  { value: 35 },
  { value: 20 },
  { value: 40 },
  { value: 45 },
];
const EcommerceHub = () => {
  return (
    <section className="strategy">
      <div className="containerOn !px-12 pt-12 pb-24">
        <h1 className="text-5xl text-center font-bold">About the eCommerce 360 Hub</h1>
        <p className="text-[22px] text-center mx-auto max-w-[800px] mt-5">Illuminating revenue generative opportunities with our reporting and intelligent eCommerce recommendations.</p>
        <ul>
            <li className="py-12 strategyBox grid grid-cols-12 items-center">
              <div className="col-span-6 trapsBg flex items-center justify-center">
                <div className="box relative">
                  <div className="flex">
                    <div className="border bg-white shadow-md flex items-center px-5 text-[20px] rounded-full me-6 font-semibold">Recommendations</div>
                    <div className="border shadow-md rounded-full">
                      <div className="relative border-5 border-white bg-slate-100 w-20 h-14 rounded-full flex items-center justify-center">
                        <Bell/>
                        <span className="absolute top-2 right-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                      </div>
                    </div>
                  </div>
                  <div className="box_card bg-white w-[85%] mx-auto shadow-md mt-4 p-4 pt-2 rounded-sm text-slate-400 border border-slate-100">
                      <p className="font-semibold text-[18px] mb-2">Traffic</p>
                      <div className="border px-3 rounded-md border-slate-100 py-4 flex flex-col gap-2">
                      <Skeleton  className="w-full h-3 rounded-sm" />
                      <div className="flex">
                        <Skeleton className="w-32 h-3 rounded-sm" />
                        <Skeleton className="w-12 bg-blue-300 ms-2 h-4 rounded-sm" />
                      </div>
                      </div>
                      <p className="font-semibold text-[18px] my-2">Traffic</p>
                      <div className="border px-3 rounded-md border-slate-100 py-4 flex flex-col gap-2">
                      <Skeleton  className="w-full h-4 rounded-sm" />
                      <div className="flex">
                        <Skeleton className="w-32 h-3 rounded-sm" />
                        <Skeleton className="w-12 bg-blue-300 ms-2 h-3 rounded-sm" />
                      </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 flex flex-col items-end px-12">
                <strong className="text-5xl w-[80%] font-semibold my-3 block">Reliable AI to Power Decisions</strong> 
                <p className="text-md w-[80%]">Artificial Intelligence fuels our recommendation engine, designed to help users understand performance and improvements to make for revenue growth.</p> 
              </div>
            </li>
            <li className="py-12 strategyBox grid grid-cols-12 items-center">
            <div className="col-span-6 flex flex-col px-12">
                <strong className="text-5xl w-[80%] font-semibold my-3 block">Cross-Selling Relevant Products</strong> 
                <p className="text-md w-[80%]">Bridgeline uses data to drive suitable product and App recommendations to our users, so they are only shown what can actually improve their online business.</p> 
              </div>
              <div className="col-span-6 trapsBg flex items-center justify-center">
                <div className="box relative">
                  <div className="flex">
                    <div className="border bg-white shadow-md flex items-center px-5 text-[20px] rounded-full me-6 font-semibold">Advanced site search</div>
                    <div className="border shadow-md rounded-full">
                      <div className="relative border-5 border-white bg-slate-100 w-20 h-14 rounded-full flex items-center justify-center">
                        <Search/>
                        <span className="absolute top-2 right-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                      </div>
                    </div>
                  </div>
                  <div className="box_card bg-white w-[85%] mx-auto shadow-md mt-4 p-4 pt-2 rounded-sm text-slate-400 border border-slate-100">
                      <img className="mb-5 mt-6 mx-auto" src={colbaBrand} alt="colba" />
                      <div className="border px-3 rounded-md border-slate-100 py-4 flex flex-col gap-2">
                      <div className="mx-auto border px-3 pt-2 rounded-full mb-2 flex items-center">
                        <ChevronDown className="-mt-2 text-red-400"/>
                        <Skeleton className="w-[170px] mb-2 h-4 rounded-sm" />
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <Skeleton className="w-[80%] h-3 rounded-sm" />
                        <Skeleton className="w-[50%] bg-blue-300 ms-2 h-3 rounded-sm" />
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-12 strategyBox grid grid-cols-12 items-center">
              <div className="col-span-6 trapsBg flex items-center justify-center">
                <div className="box w-[400px] space-y-4">
                  <div className="flex bg-white border-slate-100 p-4 shadow-md border ">
                    <div className="text">
                      <p className="font-semibold">Revenue</p>
                      <strong className="text-5xl my-4 block">$5M</strong>
                      <div className="mx-auto flex items-center gap-2 border py-1 px-3 rounded-full">
                        <ChevronUp className="-mt-1 text-green-400"/> <Skeleton className="w-[50px] h-3 rounded-full" />
                      </div>
                    </div>
                    <ResponsiveContainer className={'mt-4'} height={125}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#00AFFF" strokeWidth={2} dot />
                        <Line type="monotone" dataKey="pv" stroke="#ccc" strokeWidth={2} dot />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-4 border border-slate-100 p-3 bg-white shadow-md">
                        <p className="text-slate-300 text-sm">Traffic</p>
                        <div className="flex justify-between items-center mt-1"><strong className="text-xl">200k</strong> <p className="text-green-500">+5k</p></div>
                        <ResponsiveContainer width="100%" height={60}>
                          <AreaChart data={datas}>
                            <defs>
                            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4ade80" stopOpacity={0.5} />
                              <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
                            </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#4ade80"
                              fill="url(#greenGradient)"
                              strokeWidth={3}
                              dot={false}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="col-span-4 border border-slate-100 p-3 bg-white shadow-md">
                        <p className="text-slate-300 text-sm">Traffic</p>
                        <div className="flex justify-between items-center mt-1"><strong className="text-xl">200k</strong> <p className="text-green-500">+5k</p></div>
                        <ResponsiveContainer width="100%" height={60}>
                          <AreaChart data={datas}>
                            <defs>
                            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4ade80" stopOpacity={0.5} />
                              <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
                            </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#4ade80"
                              fill="url(#greenGradient)"
                              strokeWidth={3}
                              dot={false}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="col-span-4 border border-slate-100 p-3 bg-white shadow-md">
                        <p className="text-slate-300 text-sm">Traffic</p>
                        <div className="flex justify-between items-center mt-1"><strong className="text-xl">200k</strong> <p className="text-green-500">+5k</p></div>
                        <ResponsiveContainer width="100%" height={60}>
                          <AreaChart data={datas}>
                            <defs>
                            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4ade80" stopOpacity={0.5} />
                              <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
                            </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#4ade80"
                              fill="url(#greenGradient)"
                              strokeWidth={3}
                              dot={false}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6 flex flex-col items-end px-12">
                <strong className="text-5xl w-[80%] font-semibold my-3 block">Centralized Performance Reporting</strong> 
                <p className="text-md w-[80%]">Our reporting hub shows detailed performance metrics for your business. Keep an eye on your key revenue streams and individual app or product effectiveness.</p> 
              </div>
            </li>
        </ul> 
      </div>
    </section>
  )
}

export default EcommerceHub
