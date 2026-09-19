import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { CookieConsent, SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <main className="grid min-h-dvh place-items-center bg-background px-5 text-center"><div><p className="font-display text-8xl">404</p><h1 className="mt-3 text-xl font-semibold">This page has moved.</h1><Button asChild variant="editorial" className="mt-7"><Link to="/">Return home</Link></Button></div></main>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){console.error(error);const router=useRouter();useEffect(()=>reportLovableError(error,{boundary:"tanstack_root_error_component"}),[error]);return <main className="grid min-h-dvh place-items-center px-5 text-center"><div><h1 className="font-display text-5xl">This page didn’t load.</h1><Button variant="editorial" className="mt-6" onClick={()=>{router.invalidate();reset()}}>Try again</Button></div></main>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:type",content:"website"},{property:"og:site_name",content:"The Tailor Lady"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const{queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><SiteHeader/><main><Outlet/></main><SiteFooter/><CookieConsent/></QueryClientProvider>}
