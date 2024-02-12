"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const isUserLoggedIn = true;

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="/assets/images/logo.svg"
					alt="Trip Report logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
					Trip Report
				</p>
			</Link>

			{/* desktop nav */}
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link
							href="/create-prompt"
							className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
						>
							Create Report
						</Link>
					</div>
				) : (
					<></>
				)}
			</div>
		</nav>
	);
};

export default Nav;
