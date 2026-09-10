/* Cross-section of a shell wall, drawn in CSS — no image to load, and it stays
   sharp at any size. Each method stacks the same way the factory builds it:
   gel coat on top, then whatever the manufacturer puts behind it. */

type LayerKind = "gel" | "mat" | "woven" | "chop";

interface Layer {
  kind: LayerKind;
  height: number;
  /* A sprayed layer has no controlled thickness — the bottom edge wanders. */
  ragged?: boolean;
}

const WOVEN_WEAVE =
  "repeating-linear-gradient(90deg, rgba(120,86,48,0.55) 0 3px, transparent 3px 7px), " +
  "repeating-linear-gradient(0deg, rgba(120,86,48,0.4) 0 3px, transparent 3px 7px)";

const MAT_TEXTURE =
  "repeating-linear-gradient(38deg, rgba(150,124,88,0.35) 0 1px, transparent 1px 5px)";

const CHOP_TEXTURE =
  "radial-gradient(rgba(129,110,80,0.5) 1px, transparent 1.6px), " +
  "radial-gradient(rgba(129,110,80,0.38) 1px, transparent 1.6px)";

const LAYER_STYLE: Record<LayerKind, React.CSSProperties> = {
  gel: { background: "#f8fafc", boxShadow: "inset 0 0 0 1px rgba(148,163,184,0.35)" },
  mat: { backgroundColor: "#e8dcc6", backgroundImage: MAT_TEXTURE },
  woven: { backgroundColor: "#d3b48b", backgroundImage: WOVEN_WEAVE },
  chop: {
    backgroundColor: "#ded4c2",
    backgroundImage: CHOP_TEXTURE,
    backgroundSize: "9px 9px, 13px 13px",
    backgroundPosition: "0 0, 4px 6px",
  },
};

/* An uneven bottom edge, so a sprayed layer reads as "however thick it landed". */
const RAGGED_CLIP =
  "polygon(0 0, 100% 0, 100% 72%, 92% 88%, 84% 74%, 75% 92%, 66% 78%, 57% 95%, 48% 76%, 39% 90%, 30% 73%, 21% 89%, 12% 75%, 4% 90%, 0 76%)";

const STACKS: Record<string, Layer[]> = {
  chopped: [
    { kind: "gel", height: 7 },
    { kind: "chop", height: 46, ragged: true },
  ],
  combo: [
    { kind: "gel", height: 7 },
    { kind: "chop", height: 11 },
    { kind: "woven", height: 9 },
    { kind: "woven", height: 9 },
    { kind: "chop", height: 22, ragged: true },
  ],
  handlaid: [
    { kind: "gel", height: 7 },
    { kind: "mat", height: 8 },
    { kind: "mat", height: 8 },
    { kind: "mat", height: 8 },
    { kind: "woven", height: 11 },
    { kind: "woven", height: 11 },
  ],
};

export function LaminateStack({ method }: { method: string }) {
  const layers = STACKS[method] ?? STACKS.handlaid;

  return (
    <div
      aria-hidden
      /* Fixed height keeps the three cards' headings on one line across the row,
         while the stacks themselves stay honest about how they are built. */
      className="flex flex-col justify-start gap-[2px] h-[84px] rounded-lg overflow-hidden bg-gray-50/80 p-1.5"
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          style={{
            height: layer.height,
            ...LAYER_STYLE[layer.kind],
            ...(layer.ragged ? { clipPath: RAGGED_CLIP } : null),
          }}
          className="w-full rounded-[3px]"
        />
      ))}
    </div>
  );
}

/* Small colour key, so the stacks above are readable without a caption each. */
export function LaminateSwatch({ kind }: { kind: string }) {
  return (
    <span
      aria-hidden
      style={LAYER_STYLE[(kind as LayerKind)] ?? LAYER_STYLE.gel}
      className="inline-block w-4 h-3 rounded-[2px] ring-1 ring-black/10 shrink-0"
    />
  );
}
