import SVGTailwindCss from "@/components/svg/SVGTailwindCss";
import SVGBootstrap from "@/components/svg/SVGBootstrap";
import SVGLaravel from "@/components/svg/SVGLaravel";
import SVGCodeigniter from "@/components/svg/SVGCodeigniter";
import SVGReact from "@/components/svg/SVGReact";
import SVGTypescript from "@/components/svg/SVGTypescript";
import SVGJquery from "@/components/svg/SVGJquery";
import SVGJavascript from "@/components/svg/SVGJavascript";
import SVGMySQL from "@/components/svg/SVGMySQL";
import SVGPHP from "@/components/svg/SVGPHP";
import SVGNodeJS from "@/components/svg/SVGNodeJS";
import SVGAlpineJS from "@/components/svg/SVGAlpineJS";
import SVGNextJS from "@/components/svg/SVGNextJS";
import SVGPostgresql from "@/components/svg/SVGPostgresql";
import SVGHTML from "@/components/svg/SVGHTML";
import SVGCSS from "@/components/svg/SVGCSS";
import SVGMaterialUI from "@/components/svg/SVGMaterialUI";
import SVGExpressJS from "@/components/svg/SVGExpressJS";
import SVGMantine from "@/components/svg/SVGMantine";
import SVGMongoDB from "@/components/svg/SVGMongoDB";

export const techIcons: Record<string, React.ReactElement> = {
	MySQL: <SVGMySQL />,
	PostgreSQL: <SVGPostgresql />,
	MongoDB: <SVGMongoDB />,
	PHP: <SVGPHP />,
	Laravel: <SVGLaravel />,
	Codeigniter: <SVGCodeigniter />,
	"Node.js": <SVGNodeJS />,
	"Express.js": <SVGExpressJS />,
	"Next.js": <SVGNextJS />,
	HTML: <SVGHTML />,
	CSS: <SVGCSS />,
	JavaScript: <SVGJavascript />,
	TypeScript: <SVGTypescript />,
	"React.js": <SVGReact />,
	jQuery: <SVGJquery />,
	"Alpine.js": <SVGAlpineJS />,
	TailwindCSS: <SVGTailwindCss />,
	Bootstrap: <SVGBootstrap />,
	MaterialUI: <SVGMaterialUI />,
	MantineUI: <SVGMantine />,
};
