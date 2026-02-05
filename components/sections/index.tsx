"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ChevronsRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { HeroSection } from "@/components/sections/hero"
import ShimmerButton from "@/components/shimmer-button"
import WordAnimator from "@/components/word-animation"
import { Button } from "@/registry/default/ui/button"

import { Section } from "../section"

const item = {
  href: "/showcase?category=tree",
  title: "tree",
}

const index = () => {
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light")

  const [blocks, setBlocks] = useState([])

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      6: new Set([0]),
      7: new Set([1]),
      10: new Set([3]),
      12: new Set([7]),
      13: new Set([2, 4]),
      14: new Set([1, 5]),
      15: new Set([3, 6]),
    }),
    [] // No dependencies, so `activeDivs` will only be created once
  )
  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window
      const blockSize = innerWidth * 0.06 // Using 6vw for the block size
      const amountOfBlocks = Math.ceil(innerHeight / blockSize)

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className="h-full w-[6vw]">
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`h-[6vw] w-full border border-gray-50 dark:border-[rgba(255,255,255,0.015)] ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? "bg-gray-50 dark:bg-[rgba(255,255,255,0.03)]"
                  : ""
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ))
      // @ts-ignore
      setBlocks(newBlocks)
    }

    updateBlocks()
    window.addEventListener("resize", updateBlocks)

    return () => window.removeEventListener("resize", updateBlocks)
  }, [activeDivs])
  const words = ["Better ", "Perfect", "Modern ", "Unique "]
  return (
    // <section className="relative h-screen overflow-hidden bg-white pb-10 dark:bg-black">
    <Section className="px-0 sm:p-4">
      <div
        className={cn(
          "bg-background relative overflow-hidden sm:rounded-lg sm:border sm:px-8 sm:py-20 sm:shadow-sm"
        )}
      >
        <div className="absolute inset-0 z-0 h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 top-0 left-0 h-screen w-full items-center bg-linear-to-t from-white from-0% to-transparent to-60% px-5 py-24 dark:from-[#050505]"></div>

        <div className="pointer-events-none absolute inset-0 flex w-screen justify-end mask-[radial-gradient(transparent_5%,white)]">
          <svg
            width="1512"
            height="1714"
            viewBox="0 0 1512 1714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-0 left-0 h-auto w-full lg:w-1/2"
          >
            <g clipPath="url(#clip0_143_13)">
              <g filter="url(#filter0_f_143_13)">
                <path
                  d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                  fill="white"
                  fillOpacity="0.15"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_143_13"
                x="-595.645"
                y="38"
                width="1902.26"
                height="1213.13"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="64"
                  result="effect1_foregroundBlur_143_13"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_143_13">
                <rect width="1512" height="1714" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <article className="relative z-2 grid px-4 py-10 sm:px-0 sm:py-20">
          <a
            href={item?.href}
            className="mx-auto inline-flex w-fit items-center justify-center gap-1 rounded-full border-4 border-neutral-200 bg-[#334cec] py-0.5 pr-3 pl-0.5 text-xs shadow-[#080808] dark:border-neutral-800"
          >
            <div className="rounded-full bg-[#fcfdff] px-2 py-1 text-xs text-black">
              Update
            </div>
            <p className="inline-block text-xs text-white sm:text-base">
              ✨ Introducing
              <span className="px-1 font-semibold">{item.title}</span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-3 w-3 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="text-center text-3xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl xl:text-7xl dark:text-white">
            {/* <span className="text-[2.5rem]">Don&apos;t Just Ship Website,</span>{" "} */}
            <span className="relative mt-4 flex translate-x-0 justify-center gap-2 text-[2rem] sm:text-5xl">
              Ship{" "}
              <WordAnimator
                words={words}
                duration={5}
                className="w-fit border-neutral-200 bg-gray-200 pr-3 italic dark:border-neutral-800 dark:bg-gray-800" // Add any additional styling here
              />{" "}
              Website.
            </span>
          </h1>
          <p className="mx-auto mt-5 text-center text-sm text-black sm:w-[80%] sm:text-lg lg:w-[700px] dark:text-white">
            50+ Stunning Sections and Templates Powered by{" "}
            <strong>React</strong>, <strong>TypeScript</strong>,
            <strong> Tailwind CSS</strong>.
            <span className="hidden sm:inline">
              Save countless hours , craft eye-catching landing pages, and turn
              visitors into loyal customers
            </span>
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Link href="/showcase">
              <ShimmerButton
                borderRadius={"100px"}
                className={cn(
                  "flex w-fit items-center gap-2 rounded-full border px-4 py-3 text-white sm:px-4"
                )}
                background={"#334cec"}
              >
                <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                  View Components
                </span>
              </ShimmerButton>
            </Link>
            <Button className="h-full rounded-full px-4 lg:text-lg" asChild>
              <Link href="/blocks">
                See blocks
                <ChevronsRight />
              </Link>
            </Button>
          </div>
          {/* <p className="text-center py-2">65% off during pre-sale.</p> */}
        </article>
        <div className="absolute inset-0 top-0 left-0 z-0 flex h-screen overflow-hidden">
          {blocks}
        </div>
      </div>
    </Section>

    // </section>
  )
}

export default index
