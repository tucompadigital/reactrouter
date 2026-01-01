import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { LuSparkles as Sparkles } from "react-icons/lu";
import { LuZap as Zap } from "react-icons/lu";
import { LuGlobe as Globe } from "react-icons/lu";
import { LuShield as Shield } from "react-icons/lu";
import { LuCode as Code } from "react-icons/lu";
import { LuStar as Star } from "react-icons/lu";
import { LuRocket as Rocket } from "react-icons/lu";
import { LuCheckCircle as CheckCircle } from "react-icons/lu";
import { LuGithub as Github } from "react-icons/lu";
import { LuTwitter as Twitter } from "react-icons/lu";
import { LuLinkedin as Linkedin } from "react-icons/lu";
import { LuMenu as Menu } from "react-icons/lu";
import { LuX as X } from "react-icons/lu";
import { LuMail as Mail } from "react-icons/lu";
import { LuPhone as Phone } from "react-icons/lu";
import { LuMapPin as MapPin } from "react-icons/lu";
import { LuSend as Send } from "react-icons/lu";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu";



export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <Welcome message={loaderData.message} />;
}
