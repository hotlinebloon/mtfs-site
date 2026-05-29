type BrainCircuitMarkProps = {
  className?: string;
  animated?: boolean;
};

export default function BrainCircuitMark({
  className = "",
  animated = false,
}: BrainCircuitMarkProps) {
  return (
    <svg
      className={`brain-circuit-mark ${animated ? "animated" : ""} ${className}`}
      viewBox="0 0 760 520"
      role="img"
      aria-label="Brain and circuit mark"
    >
      <path
        className="brain-outline"
        d="M340 116 C316 91 279 82 240 90 C205 97 178 116 160 144 C130 148 106 171 102 201 C79 216 70 242 76 269 C82 294 99 311 120 320 C112 351 126 381 153 400 C171 423 201 431 229 423 C256 443 292 441 317 422 C340 404 352 377 350 348 L350 151 C350 136 346 124 340 116 Z"
      />

      <path className="brain-fold delay-1" d="M292 116 C263 130 251 160 257 188 C263 214 281 228 299 238" />
      <path className="brain-fold delay-2" d="M250 108 C221 124 211 153 216 179 C221 202 237 218 257 228" />
      <path className="brain-fold delay-3" d="M204 129 C181 145 174 171 182 196 C190 217 205 231 225 238" />
      <path className="brain-fold delay-2" d="M153 162 C133 181 132 208 146 228 C158 245 175 255 195 260" />
      <path className="brain-fold delay-3" d="M145 252 C129 270 131 296 147 314 C163 331 184 341 207 343" />
      <path className="brain-fold delay-4" d="M182 326 C206 339 230 343 255 339 C276 335 292 327 307 314" />
      <path className="brain-fold delay-3" d="M215 248 C203 268 207 293 222 310 C237 326 257 333 278 331" />
      <path className="brain-fold delay-4" d="M259 251 C249 270 253 292 265 307 C277 322 293 328 310 325" />
      <path className="brain-fold delay-5" d="M225 365 C252 377 283 374 309 357" />

      <path
        className="tech-outline"
        d="M360 150 C365 124 381 104 405 94 C434 82 473 87 505 103 C534 118 557 141 568 165 C596 172 617 194 621 222 C641 237 648 264 641 289 C635 311 618 327 598 336 C600 367 583 394 556 407 C535 427 503 434 472 421 C443 433 405 421 386 395 C367 370 360 340 360 312 Z"
      />

      <path className="trace delay-1" d="M374 141 H417 V120 H448" />
      <path className="trace delay-2" d="M378 176 H465 V151 H516" />
      <path className="trace delay-3" d="M374 213 H442 V247 H524" />
      <path className="trace delay-4" d="M381 253 H494 V221 H552" />
      <path className="trace delay-5" d="M374 294 H450 V333 H522" />
      <path className="trace delay-4" d="M384 337 H504 V371 H560" />
      <path className="trace delay-3" d="M516 151 V124" />
      <path className="trace delay-4" d="M524 247 V283" />
      <path className="trace delay-5" d="M522 333 V304" />
      <path className="trace delay-5" d="M560 371 V399" />

      <rect className="chip delay-3" x="438" y="110" width="31" height="23" rx="4" />
      <rect className="chip delay-4" x="537" y="211" width="33" height="24" rx="4" />
      <rect className="chip delay-5" x="508" y="273" width="33" height="24" rx="4" />
      <rect className="chip delay-5" x="544" y="386" width="34" height="25" rx="4" />

      <circle className="node delay-1" cx="417" cy="141" r="6" />
      <circle className="node delay-2" cx="465" cy="176" r="6" />
      <circle className="node delay-3" cx="442" cy="213" r="6" />
      <circle className="node delay-4" cx="494" cy="253" r="6" />
      <circle className="node delay-5" cx="450" cy="294" r="6" />
      <circle className="node delay-4" cx="504" cy="337" r="6" />
      <circle className="node delay-3" cx="516" cy="151" r="6" />
      <circle className="node delay-4" cx="524" cy="247" r="6" />
      <circle className="node delay-5" cx="560" cy="371" r="6" />

      <path
        id="orbitPath"
        className="orbit-path"
        d="M360 76 C218 76 90 150 90 260 C90 374 223 448 365 448 C540 448 654 374 654 260 C654 150 540 76 360 76 Z"
      />

      {animated && (
        <circle className="orbit-ball" r="9">
          <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
      )}
    </svg>
  );
}
