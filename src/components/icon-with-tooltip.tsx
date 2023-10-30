import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface IconTooltipProps {
  icon: React.ReactElement;
  iconTooltip: string;
}

export function IconTooltip({icon, iconTooltip}: IconTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p>{iconTooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

