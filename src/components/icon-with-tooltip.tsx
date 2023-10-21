import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function IconTooltip({icon, iconTooltip}) {
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

