"use client";

import Image from "next/image";

export default function VoicesSection() {
  return (
    <section
      className="relative w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg10.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 py-32 flex flex-col items-center justify-center">
        {/* ==================== HEADER AREA ==================== */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          {/* ✅ uabb-photo structure */}
          <div
            className="uabb-module-content uabb-photo uabb-photo-align-center uabb-photo-mob-align-center"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className="uabb-photo-content">
              <div className="relative w-[189px] h-[94.5px] flex justify-center items-center">
                <Image
                  src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h3.png"
                  alt="mm-hp-h3"
                  title="mm-hp-h3"
                  fill
                  className="object-contain object-top scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ✅ Info Box */}
          <div className="uabb-module-content uabb-infobox infobox-center mt-6">
            <div className="uabb-infobox-left-right-wrap">
              <div className="uabb-infobox-content">
                <div className="uabb-infobox-title-wrap">
                  <h2
                    className="uabb-infobox-title text-[42px] font-semibold"
                    style={{
                      fontFamily: '"Noto Serif JP", serif',
                      color: "#000000",
                    }}
                  >
                    Voices of happy partners
                  </h2>
                </div>
                <div className="uabb-infobox-text-wrap mt-4">
                  <div
                    className="uabb-infobox-text text-[18px] leading-relaxed"
                    style={{
                      fontFamily: '"Noto Serif JP", serif',
                      color: "#000000",
                    }}
                  >
                    <p>
                      Through fun and engaging English lessons, <br />
                      we help you develop the skills you need to become a global
                      citizen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== TESTIMONIAL CARDS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1200px]">
          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8">
            <Image
              src="https://miraiminds.jp/wp-content/uploads/bb-plugin/cache/mm-test2-circle.png"
              alt="Yuki Kozuki"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3
              className="text-[20px] font-semibold"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Yuki Kozuki, 6 years old
            </h3>
            <p
              className="text-[16px] text-gray-800"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              I used to be shy, <br /> but now I'm confident!
            </p>

            {/* ✅ Quote Icon */}
            <div className="uabb-module-content uabb-imgicon-wrap mt-2">
              <span className="uabb-icon-wrap inline-block">
                <span className="uabb-icon text-[28px] text-gray-800 opacity-80">
                  <i className="fi-comment-quotes" aria-hidden="true"></i>
                </span>
              </span>
            </div>

            <div
              className="text-[15px] leading-relaxed text-gray-700 mt-4"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              My son is usually shy at school, but I was surprised to see him
              become very talkative and actively participate in class at Mirai
              Minds. I think Mirai Minds is an excellent school that develops
              talents.
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8">
            <Image
              src="https://miraiminds.jp/wp-content/uploads/bb-plugin/cache/mm-test1-circle.png"
              alt="Kiara Jain"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3
              className="text-[20px] font-semibold"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Kiara Jain, 7 years old
            </h3>
            <p
              className="text-[16px] text-gray-800"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Mirai Minds is <br /> my daughter's guide.
            </p>

            {/* ✅ Quote Icon */}
            <div className="uabb-module-content uabb-imgicon-wrap mt-2">
              <span className="uabb-icon-wrap inline-block">
                <span className="uabb-icon text-[28px] text-gray-800 opacity-80">
                  <i className="fi-comment-quotes" aria-hidden="true"></i>
                </span>
              </span>
            </div>

            <div
              className="text-[15px] leading-relaxed text-gray-700 mt-4 space-y-3"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p>
                Mirai Minds has been so kind to my daughter and I am grateful
                for that. I believe that Mirai Minds' fun lessons have had a big
                impact on Chiara's development.
              </p>
              <p>
                They not only help my daughter with her academics, but also with
                the skills she needs in society.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8">
            <Image
              src="https://miraiminds.jp/wp-content/uploads/bb-plugin/cache/mm-test3-circle.png"
              alt="Naomi Kondo"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3
              className="text-[20px] font-semibold"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Naomi Kondo, Director of Reizan Park Montessori School
            </h3>
            <p
              className="text-[16px] text-gray-800"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Why I <br /> chose Mirai Minds
            </p>

            {/* ✅ Quote Icon */}
            <div className="uabb-module-content uabb-imgicon-wrap mt-2">
              <span className="uabb-icon-wrap inline-block">
                <span className="uabb-icon text-[28px] text-gray-800 opacity-80">
                  <i className="fi-comment-quotes" aria-hidden="true"></i>
                </span>
              </span>
            </div>

            <div
              className="text-[15px] leading-relaxed text-gray-700 mt-4 space-y-3"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p>
                We are very pleased to be working with Mirai Minds on children's
                education. Their programs are designed not just to teach, but to
                bring out the best in children's imagination and creativity,
                which is very appealing to us as educators.
              </p>
              <p>
                The children always look forward to their Mirai Minds lessons,
                and I can't wait to see how they will grow through this program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
