import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
} from '@heroicons/react/16/solid'
Link
import type { JSX } from 'react'
import { Link } from 'react-router-dom'
type ComponentType = {
  title: string,
  firstVal: string,
  firstRoute: string,
  secondVal: string,
  secondRoute: string
}

function DropDown({ title, firstVal, firstRoute, secondVal, secondRoute }: ComponentType): JSX.Element {
  return (
    <div >
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 focus:outline-0 px-3 py-1.5 cursor-pointer text-sm/6 font-semibold text-purple focus:border-purple-900 shadow-purple  data-hover:text-white data-open:text-white">
          {title}
          <ChevronDownIcon className="size-4 fill-purple/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-45 z-60 origin-top-right border border-purple/5 bg-purple/5 p-1 text-sm/6 text-purple bg-purple-900 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0">
          <MenuItem>
            <Link to={firstRoute}>
              <button className="group flex w-full cursor-pointer text-white hover:bg-purple-200 hover:text-purple-900 items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
                <PencilIcon className="size-4 fill-gray-950" />
                {firstVal}
              </button>
            </Link>

          </MenuItem>
          <MenuItem>
            <Link to={secondRoute}>
              <button className="group flex w-full items-center cursor-pointer text-white hover:bg-purple-200 hover:text-purple-900 gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
                <Square2StackIcon className="size-4 fill-gray-950" />
                {secondVal}
              </button>
            </Link>
          </MenuItem>
          <div className="my-1 h-px bg-black/70" />
          <MenuItem>
            <div className='text-white hover:fill-amber-200'>
              <button className="group hover:text-red-500 hover:bg-purple-200 flex w-full items-center cursor-pointer gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
                <p className=''><span className='font-bold text-gray-950'>&nbsp;X </span>&ensp;Close</p>
              </button>
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default DropDown

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import {
//   ArchiveBoxXMarkIcon,
//   ChevronDownIcon,
//   PencilIcon,
//   Square2StackIcon,
//   TrashIcon,
// } from '@heroicons/react/16/solid'

// export default function Example() {
//   return (
//     <div className="fixed top-24 w-52 text-right">
//       <Menu __demoMode>
//         <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-purple shadow-inner shadow-purple/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-purple data-hover:bg-gray-700 data-open:bg-gray-700">
//           Options
//           <ChevronDownIcon className="size-4 fill-purple/60" />
//         </MenuButton>

//         <MenuItems
//           transition
//           anchor="bottom end"
//           className="w-52 origin-top-right rounded-xl border border-purple/5 bg-purple/5 p-1 text-sm/6 text-purple transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
//         >
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
//               <PencilIcon className="size-4 fill-purple/30" />
//               Edit
//               <kbd className="ml-auto hidden font-sans text-xs text-purple/50 group-data-focus:inline">⌘E</kbd>
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
//               <Square2StackIcon className="size-4 fill-purple/30" />
//               Duplicate
//               <kbd className="ml-auto hidden font-sans text-xs text-purple/50 group-data-focus:inline">⌘D</kbd>
//             </button>
//           </MenuItem>
//           <div className="my-1 h-px bg-purple/5" />
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
//               <ArchiveBoxXMarkIcon className="size-4 fill-purple/30" />
//               Archive
//               <kbd className="ml-auto hidden font-sans text-xs text-purple/50 group-data-focus:inline">⌘A</kbd>
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-purple/10">
//               <TrashIcon className="size-4 fill-purple/30" />
//               Delete
//               <kbd className="ml-auto hidden font-sans text-xs text-purple/50 group-data-focus:inline">⌘D</kbd>
//             </button>
//           </MenuItem>
//         </MenuItems>
//       </Menu>
//     </div>
//   )
// }
