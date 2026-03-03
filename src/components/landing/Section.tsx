import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionData } from "./sections"

interface SectionProps extends SectionData {
  isActive: boolean
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, recipes }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {recipes && recipes.length > 0 && (
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {recipes.map((recipe, i) => (
            <motion.div
              key={recipe.name}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <div className="text-4xl mb-3">{recipe.emoji}</div>
              <h3 className="text-white font-semibold text-lg mb-1">{recipe.name}</h3>
              <p className="text-[#FF4D00] text-sm mb-3">⏱ {recipe.time}</p>
              <div className="flex flex-wrap gap-1">
                {recipe.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            onClick={() => {
              const container = document.querySelector('.snap-y')
              if (container) {
                container.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
              }
            }}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
