import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Box, useTheme } from "@mui/material";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HighlightsSwiper() {
  const { palette } = useTheme();

  const padding = "16px";
  const bulletsMarginTop = "12px";
  const bulletsGap = "8px";
  const bulletBgColor = palette.background.paper;
  const bulletActiveBgColor = palette.background.default;
  const bulletWidth = "8px";
  const bulletHeight = "8px";
  const bulletBorderRadius = "4px";
  const bulletActiveWidth = "24px";

  const slideHeight = "160px";

  return (
    <>
      <style>
        {`
          .highlights-swiper {
            padding-right: ${padding};
            padding-left: ${padding};
          }

          .highlights-swiper .swiper-pagination {
            position: unset;
            margin-top: ${bulletsMarginTop};
            text-align: unset;
            display: flex;
            gap: ${bulletsGap};
          }

          .highlights-swiper .swiper-pagination-bullet {
            background-color: ${bulletBgColor};
            width: ${bulletWidth};
            height: ${bulletHeight};
            border-radius: ${bulletBorderRadius};
            transition: all 0.3s ease-in-out;
            display: inline-block;
            margin: 0 !important;
          }

          .highlights-swiper .swiper-pagination-bullet-active {
            background-color: ${bulletActiveBgColor};
            width: ${bulletActiveWidth};
          }

          .highlights-swiper .swiper-slide {
            width: fit-content;
          }

          .highlights-swiper .swiper-button-prev,
          .highlights-swiper .swiper-button-next {
            color: ${palette.primary.main};
            position: absolute;
            top: calc(${slideHeight} / 2);
            background-color: unset;
            border: none;
            transition: all 0.3s ease-in-out;
            opacity: 1;
          }

          .highlights-swiper .swiper-button-prev::after,
          .highlights-swiper .swiper-button-next::after {
            font-size: 24px;
            font-weight: 600;
          }

          .highlights-swiper .swiper-button-prev {
            left: ${padding};
          }

          .highlights-swiper .swiper-button-next {
            right: ${padding};
          }

          .highlights-swiper .swiper-button-disabled {
            opacity: 0;
            visibility: hidden;
          }
        `}
      </style>

      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        modules={[Mousewheel, Navigation, Pagination, FreeMode]}
        className="highlights-swiper"
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              borderRadius={1}
              height={slideHeight}
              width={300}
              bgcolor={palette.primary.light}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {index + 1}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
