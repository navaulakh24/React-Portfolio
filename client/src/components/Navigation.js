import React from 'react';

export default function Navigation () {
    return (
        <div>
        <div>
            <a href="/">About</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact</a>
            <a href="/">Resume</a>
        </div>
        </div>
    );
    }

//     import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
// } from "@material-tailwind/react";
 
// export default function Example() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);
 
//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           About
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Portfolio
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Contact
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Resume
//         </a>
//       </Typography>
//     </ul>
//   );
 
//   return (
//     <>
//       <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//             Material Tailwind
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           <Button variant="gradient" size="sm" fullWidth className="mb-2">
//             <span>Buy Now</span>
//           </Button>
//         </MobileNav>
//       </Navbar>
//       <div className="mx-auto max-w-screen-md py-12">
//         <Card className="mb-12 overflow-hidden">
//           <img
//             alt="nature"
//             className="h-[32rem] w-full object-cover object-center"
//             src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
//           />
//         </Card>
//         <Typography variant="h2" color="blue-gray" className="mb-2">
//           What is Material Tailwind
//         </Typography>
//         <Typography color="gray" className="font-normal">
//           Can you help me out? you will get a lot of free exposure doing this
//           can my website be in english?. There is too much white space do less
//           with more, so that will be a conversation piece can you rework to make
//           the pizza look more delicious other agencies charge much lesser can
//           you make the blue bluer?. I think we need to start from scratch can my
//           website be in english?, yet make it sexy i&apos;ll pay you in a week
//           we don&apos;t need to pay upfront i hope you understand can you make
//           it stand out more?. Make the font bigger can you help me out? you will
//           get a lot of free exposure doing this that&apos;s going to be a chunk
//           of change other agencies charge much lesser. Are you busy this
//           weekend? I have a new project with a tight deadline that&apos;s going
//           to be a chunk of change. There are more projects lined up charge extra
//           the next time.
//         </Typography>
//       </div>
//     </>
//   );
// }
