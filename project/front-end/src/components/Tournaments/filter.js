import React, { useState, useEffect } from "react";
//import data from "../db/data";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
import data from "../../result.json";
import MegaMenuDefault from "../GamePicker";
import Picker from "../DataPicker";

function Filter() {
  const allGamesArr = [
    "CS2",
    "VALORANT",
    "FORTNITE",
    "APEX",
    "МИР ТАНКОВ",
    "DOTA 2",
    "WARZONE",
  ];
  const allIcons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 64 64"
    >
      <linearGradient
        id="wI_UqvbT2IPKvI63st2dRa_01rbJT1jHOdg_gr1"
        x1="32"
        x2="32"
        y1="538.359"
        y2="583.952"
        gradientTransform="translate(0 -529.276)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#1a6dff"></stop>
        <stop offset="1" stop-color="#c822ff"></stop>
      </linearGradient>
      <path
        fill="url(#wI_UqvbT2IPKvI63st2dRa_01rbJT1jHOdg_gr1)"
        d="M50,55H14c-2.757,0-5-2.243-5-5V14c0-2.757,2.243-5,5-5h36c2.757,0,5,2.243,5,5v36	C55,52.757,52.757,55,50,55z M14,11c-1.654,0-3,1.346-3,3v36c0,1.654,1.346,3,3,3h36c1.654,0,3-1.346,3-3V14c0-1.654-1.346-3-3-3H14	z"
      ></path>
      <linearGradient
        id="wI_UqvbT2IPKvI63st2dRb_01rbJT1jHOdg_gr2"
        x1="23.694"
        x2="23.694"
        y1="17.171"
        y2="44.563"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6dc7ff"></stop>
        <stop offset="1" stop-color="#e6abff"></stop>
      </linearGradient>
      <path
        fill="url(#wI_UqvbT2IPKvI63st2dRb_01rbJT1jHOdg_gr2)"
        d="M25.598,26.469 c0.497,0.073,0.742-0.393,1.11-0.607c0.481-0.342,0.354-1.012,0.562-1.502c0.145-0.048,0.292-0.092,0.439-0.134 c-0.076-0.477-0.271-0.936-0.238-1.427c0.262-0.195,0.569-0.409,0.677-0.729c0.101-0.05,0.205-0.1,0.306-0.154 c0.742-0.012,1.484,0.006,2.227-0.004c0.189,0.01,0.119-0.242,0.164-0.354c0.188,0.121,0.422,0.136,0.635,0.076 c0.358-0.118,0.739-0.054,1.109-0.071c0.24,0.006,0.507-0.047,0.706,0.124c0.308-0.053,0.623-0.048,0.936-0.043 c0.005-0.126,0.009-0.251,0.013-0.376c-0.243,0.001-0.486,0.001-0.729,0.005c-0.073-0.029-0.148-0.058-0.222-0.087 c-0.04,0.029-0.12,0.088-0.16,0.118c-0.538,0.044-1.083,0.009-1.622,0.015c0.006-0.168,0.09-0.357-0.056-0.494 c-0.031,0.038-0.096,0.111-0.127,0.148c-0.042-0.052-0.127-0.154-0.169-0.206c-0.003-0.275-0.003-0.552-0.004-0.828 c-0.048,0.001-0.144,0.005-0.193,0.007c0.001,0.351-0.002,0.702,0,1.053c-0.051,0-0.152-0.001-0.202-0.001 c0.004-0.066,0.014-0.198,0.019-0.265c-1.927-0.019-3.852,0.001-5.78-0.011c0-0.044-0.002-0.131-0.003-0.175 c-0.118-0.029-0.234-0.058-0.349-0.091c-0.001-0.18-0.004-0.364-0.095-0.524c-0.079,0.241-0.126,0.491-0.186,0.737 c-0.44-0.031-0.816,0.279-1.26,0.207c-0.022-0.256-0.062-0.512-0.062-0.769c0.208-0.069,0.464-0.097,0.611-0.277 c0.216-0.533,0.075-1.135-0.148-1.643c0.012-0.029,0.036-0.091,0.048-0.12c-0.024-0.044-0.074-0.133-0.098-0.178 c-0.313-0.118-0.593-0.3-0.872-0.48c-0.3-0.148-0.645-0.256-0.982-0.237c-0.112,0.006-0.224,0.026-0.333,0.064 c-1.32,0.237-2.013,1.924-1.434,3.08c-0.07,0.064-0.14,0.13-0.21,0.194c-0.255-0.349-0.707-0.252-1.067-0.166 c-0.762,0.256-1.251,0.959-1.506,1.689c-0.318,0.857-0.291,1.791-0.181,2.685c-0.354,0.168-0.754,0.061-1.117,0.187 c-0.026,0.714-0.072,1.429-0.197,2.133c-0.029,0.209-0.072,0.426,0.005,0.63c0.321,0.075,0.64,0.159,0.967,0.202 c-0.201,0.037-0.392,0.111-0.572,0.207c0,0-0.116,0.065-0.141,0.112c-0.108,0.931,0.214,1.831,0.187,2.761 c-0.431-0.091-0.415,0.412-0.472,0.693c0.06,0.054,0.118,0.11,0.178,0.164c-0.057,0.097-0.104,0.197-0.142,0.302 c0.075,0.268-0.001,0.583,0.237,0.781c-0.126,0.79-0.271,1.578-0.353,2.374c-0.034,0.262,0.135,0.523,0.039,0.78 c-0.09,0.29-0.313,0.518-0.378,0.82c-0.346,0.342-0.536,0.799-0.76,1.222c-0.19,0.338-0.154,0.735-0.231,1.103 c-0.207,0.359-0.504,0.709-0.498,1.146c-0.004,0.235-0.05,0.503,0.147,0.678c-0.158,0.839-0.415,1.654-0.61,2.485 c-0.031,0.316-0.051,0.66,0.096,0.952c0.629,0.179,1.287,0.093,1.927,0.043c0.043-0.281,0.05-0.567-0.09-0.821 c-0.228-0.811-0.006-1.693,0.397-2.413c0.355-0.065,0.475-0.407,0.559-0.712c0.185-0.676,0.625-1.254,0.766-1.945 c0.032-0.217-0.103-0.44-0.012-0.651c0.1-0.229,0.159-0.508,0.383-0.654c0.205-0.133,0.309-0.36,0.397-0.579 c0.067-0.203,0.321-0.239,0.423-0.417c0.19-0.331,0.094-0.739,0.265-1.078c0.222-0.523,0.334-1.122,0.76-1.53 c0.201-0.173,0.189-0.466,0.358-0.657c0.118,0.232,0.216,0.485,0.401,0.675c0.161,0.069,0.342,0.051,0.515,0.063 c0.438,0.642,0.872,1.288,1.305,1.933c0.183,0.301,0.598,0.362,0.905,0.233c0.092,0.153,0.234,0.286,0.276,0.465 c-0.027,0.276-0.064,0.551-0.079,0.829c-0.17,0.16-0.295,0.38-0.25,0.621c0.057,0.494,0.103,0.99,0.142,1.486 c0.058,0.34,0.233,0.656,0.199,1.011c0.047,0.04,0.141,0.119,0.187,0.158c-0.031,0.544,0.119,1.092,0.04,1.63 c-0.245,0.477-0.256,1.024-0.391,1.534c0.316,0.368,0.817,0.164,1.228,0.174c0.425,0.049,0.815,0.283,1.252,0.261 c0.567-0.008,1.14,0.043,1.701-0.06c0.038-0.202,0.052-0.407-0.027-0.602c-0.257-0.166-0.536-0.293-0.828-0.38 c-0.31-0.077-0.483-0.369-0.687-0.587c-0.188-0.245-0.465-0.455-0.499-0.782c-0.049-0.446-0.027-0.9-0.013-1.347 c0.07-0.191,0.219-0.355,0.207-0.571c0.1-0.423-0.147-0.834-0.056-1.255c0.147-0.932,0.262-1.872,0.233-2.817 c-0.05-0.071-0.098-0.141-0.146-0.211c-0.015-0.155-0.032-0.308-0.048-0.461c-0.123-0.053-0.262-0.107-0.289-0.255 c-0.274-0.765-0.588-1.515-0.94-2.247c-0.342-0.646-0.786-1.233-1.276-1.774c-0.087-0.255-0.114-0.526-0.177-0.786 c0.048-0.097,0.097-0.194,0.147-0.29c0.219,0.03,0.507,0.243,0.69,0.036c0.209-0.318,0.377-0.676,0.356-1.067 c-0.003-0.666,0.185-1.325,0.091-1.989c-0.052-0.305-0.297-0.522-0.594-0.579c0.06-0.215,0.117-0.432,0.154-0.653 C23.906,25.837,24.699,26.39,25.598,26.469z M25.544,22.751c0.079-0.043,0.158-0.089,0.237-0.135 c-0.161-0.171-0.01-0.278,0.143-0.372c0.115-0.001,0.23-0.002,0.345-0.004c0.064,0.151,0.101,0.311,0.116,0.475 c-0.034,0.035-0.105,0.106-0.139,0.142c-0.165,0.357-0.409,0.694-0.714,0.944c-0.1-0.245-0.22-0.482-0.36-0.706 C25.14,22.901,25.42,22.847,25.544,22.751z"
      ></path>
      <linearGradient
        id="wI_UqvbT2IPKvI63st2dRc_01rbJT1jHOdg_gr3"
        x1="32.538"
        x2="32.538"
        y1="27.615"
        y2="36.846"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6dc7ff"></stop>
        <stop offset="1" stop-color="#e6abff"></stop>
      </linearGradient>
      <path
        fill="url(#wI_UqvbT2IPKvI63st2dRc_01rbJT1jHOdg_gr3)"
        d="M38.077,29.462 c0-1.019-0.827-1.846-1.846-1.846h-6.923c-1.274,0-2.308,1.034-2.308,2.308v4.615c0,1.274,1.034,2.308,2.308,2.308h6.923 c1.019,0,1.846-0.827,1.846-1.846v-3.692h-6.923c0,1.019,0.827,1.846,1.846,1.846h2.769V35h-6.462v-5.538H38.077z"
      ></path>
      <linearGradient
        id="wI_UqvbT2IPKvI63st2dRd_01rbJT1jHOdg_gr4"
        x1="45.462"
        x2="45.462"
        y1="27.615"
        y2="36.846"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6dc7ff"></stop>
        <stop offset="1" stop-color="#e6abff"></stop>
      </linearGradient>
      <path
        fill="url(#wI_UqvbT2IPKvI63st2dRd_01rbJT1jHOdg_gr4)"
        d="M48.692,27.615h-6.462 c-1.274,0-2.308,1.034-2.308,2.308v4.615c0,1.274,1.034,2.308,2.308,2.308h6.462c1.274,0,2.308-1.034,2.308-2.308v-4.615 C51,28.649,49.966,27.615,48.692,27.615z M48.692,35h-6.462v-5.538h6.462V35z"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="iIa8k2duEToubOiDiINZpa_GjCK2f2wpZxt_gr1"
        x1="-2.16"
        x2="28.478"
        y1="4.752"
        y2="44.103"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f52537"></stop>
        <stop offset=".293" stop-color="#f32536"></stop>
        <stop offset=".465" stop-color="#ea2434"></stop>
        <stop offset=".605" stop-color="#dc2231"></stop>
        <stop offset=".729" stop-color="#c8202c"></stop>
        <stop offset=".841" stop-color="#ae1e25"></stop>
        <stop offset=".944" stop-color="#8f1a1d"></stop>
        <stop offset="1" stop-color="#7a1818"></stop>
      </linearGradient>
      <path
        fill="url(#iIa8k2duEToubOiDiINZpa_GjCK2f2wpZxt_gr1)"
        d="M6,10.982v11.448c0,0.454,0.155,0.895,0.438,1.249L17.4,37.38 c0.38,0.474,0.954,0.751,1.562,0.751h8.958c0.839,0,1.305-0.97,0.781-1.625L7.781,10.357C7.19,9.619,6,10.037,6,10.982z"
      ></path>
      <linearGradient
        id="iIa8k2duEToubOiDiINZpb_GjCK2f2wpZxt_gr2"
        x1="30.721"
        x2="40.996"
        y1="13.549"
        y2="26.746"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f52537"></stop>
        <stop offset=".293" stop-color="#f32536"></stop>
        <stop offset=".465" stop-color="#ea2434"></stop>
        <stop offset=".605" stop-color="#dc2231"></stop>
        <stop offset=".729" stop-color="#c8202c"></stop>
        <stop offset=".841" stop-color="#ae1e25"></stop>
        <stop offset=".944" stop-color="#8f1a1d"></stop>
        <stop offset="1" stop-color="#7a1818"></stop>
      </linearGradient>
      <path
        fill="url(#iIa8k2duEToubOiDiINZpb_GjCK2f2wpZxt_gr2)"
        d="M28.149,27.131h9.022c0.53,0,1.039-0.211,1.414-0.586l2.828-2.828 C41.789,23.342,42,22.833,42,22.303V10.871c0-0.933-1.164-1.358-1.765-0.644l-12.851,15.26 C26.837,26.137,27.299,27.131,28.149,27.131z"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 17 9 L 17 12 L 10 12 L 11 20 L 10 38 L 17 36 L 17 42 L 26 40 L 26 35 L 40 36 L 39 19 L 40 12 L 32.333984 12 L 33 9 L 17 9 z M 19 11 L 30.507812 11 L 29.396484 16 L 24 16 L 24 23 L 29 23 L 29 28 L 24 28 L 24 38.396484 L 19 39.507812 L 19 11 z M 12.265625 14 L 17 14 L 17 33.919922 L 12.152344 35.304688 L 13.007812 19.931641 L 12.265625 14 z M 31.888672 14 L 37.693359 14 L 36.992188 18.916016 L 37.869141 33.84375 L 26 33 L 26 30 L 31 30 L 31 21 L 26 21 L 26 18 L 31 18 L 31.888672 14 z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54.33 36.28"
      width="20px"
      height="20px"
    >
      <defs>
        <style></style>
      </defs>
      <title>apex-legends-nav-logo</title>
      <g id="Layer_2">
        <g id="Layer_1-2">
          <path
            class="cls-1"
            d="M22,0H15.21l-.82,3.83h.82V26.38h4V18.72H22a3.29,3.29,0,0,0,3.3-3.29V3.29A3.29,3.29,0,0,0,22,0Zm-.72,14.89h-2V3.83h2Z"
          />
          <polygon
            class="cls-1"
            points="28.83 3.83 29.66 3.83 29.66 26.39 38.77 26.39 38.77 22.55 33.67 22.55 33.67 15.11 37.26 15.11 37.26 11.28 33.67 11.28 33.67 3.83 38.77 3.83 38.77 0 29.66 0 28.83 3.83"
          />
          <polygon
            class="cls-1"
            points="51.35 12.27 54.33 0 50.09 0 48.24 8.31 46.23 0 43.09 0 42.26 3.83 43.09 3.83 43.09 3.83 45.14 12.27 45.14 14.11 42.16 26.39 46.39 26.39 48.24 18.08 50.25 26.39 54.33 26.39 51.35 14.11 51.35 12.27"
          />
          <path
            class="cls-1"
            d="M8.71,0H3.18l-2,18.72H.81v.09L0,22.55H.81l-.4,3.83H4l.34-3.83H7.56l.34,3.83h3.58ZM4.66,18.72,5.94,3.83,7.23,18.72Z"
          />
          <polygon
            class="cls-1"
            points="9.77 32.63 9.77 33.48 0.59 33.48 0.41 32.63 9.77 32.63"
          />
          <polygon
            class="cls-1"
            points="44.97 32.63 44.97 33.48 54.15 33.48 54.33 32.63 44.97 32.63"
          />
          <polygon
            class="cls-1"
            points="17.19 36.28 19.38 36.28 19.38 35.43 18.04 35.43 18.04 33.48 19.04 33.48 19.04 32.63 18.04 32.63 18.04 30.53 19.38 30.53 19.38 29.68 17.19 29.68 17.19 36.28"
          />
          <polygon
            class="cls-1"
            points="14.09 30.53 14.09 29.68 13.24 29.68 13.24 36.28 15.43 36.28 15.43 35.43 14.09 35.43 14.09 30.53"
          />
          <path
            class="cls-1"
            d="M23.23,29.68H21.94a.58.58,0,0,0-.56.57v5.47a.57.57,0,0,0,.56.56h1.29a.57.57,0,0,0,.56-.56V32.63H22.68l-.18.85h.44v2h-.71v-4.9h.71v.85l.85-.19v-.94A.57.57,0,0,0,23.23,29.68Z"
          />
          <polygon
            class="cls-1"
            points="25.79 36.28 27.98 36.28 27.98 35.43 26.64 35.43 26.64 33.48 27.63 33.48 27.63 32.63 26.64 32.63 26.64 30.53 27.98 30.53 27.98 29.68 25.79 29.68 25.79 36.28"
          />
          <polygon
            class="cls-1"
            points="31.82 33.48 30.74 29.68 29.98 29.68 29.98 36.28 30.82 36.28 30.82 32.63 31.95 36.28 32.67 36.28 32.67 29.68 31.82 29.68 31.82 33.48"
          />
          <path
            class="cls-1"
            d="M36.52,29.68H34.67v6.6h1.85a.57.57,0,0,0,.56-.56V30.25A.57.57,0,0,0,36.52,29.68Zm-.28,5.75h-.72v-4.9h.72Z"
          />
          <path
            class="cls-1"
            d="M40.93,32.63h-1v-2.1h.72v.85l.85-.19h0v-1a.56.56,0,0,0-.57-.56H39.65a.55.55,0,0,0-.57.57v2.67a.57.57,0,0,0,.57.56h1v2h-.72v-.89l-.85.18v1a.58.58,0,0,0,.57.56h1.28a.57.57,0,0,0,.57-.56V33.2A.58.58,0,0,0,40.93,32.63Z"
          />
        </g>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNa_F2gKFXx0l438_gr1"
        x1="42.179"
        x2="24.179"
        y1="42.965"
        y2="20.88"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#4b4b4b"></stop>
        <stop offset=".531" stop-color="#393939"></stop>
        <stop offset="1" stop-color="#252525"></stop>
      </linearGradient>
      <path
        fill="url(#keig9XniC3Hl4nj0bxMdNa_F2gKFXx0l438_gr1)"
        d="M24,44.366c-0.709,0-1.419-0.26-1.972-0.781L8.601,30.946 c-0.575-0.541-0.905-1.305-0.905-2.095V12.469c0-0.779,0.323-1.536,0.886-2.076l6.997-6.707c0.539-0.516,1.246-0.8,1.991-0.8H30.43 c0.746,0,1.453,0.284,1.991,0.8l6.996,6.707c0.563,0.54,0.886,1.297,0.886,2.077v16.382c0,0.79-0.33,1.553-0.905,2.095 L25.972,43.586C25.419,44.106,24.71,44.366,24,44.366z"
      ></path>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNb_F2gKFXx0l438_gr2"
        x1="33.466"
        x2="30.084"
        y1="14.069"
        y2="39.41"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#484b4f"></stop>
        <stop offset=".23" stop-color="#656d75"></stop>
        <stop offset=".367" stop-color="#727d86"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNb_F2gKFXx0l438_gr2)"
        points="30,15 30,26.416 26.916,29.316 31.281,33.349 36,28.908 36.001,15"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNc_F2gKFXx0l438_gr3"
        x1="24.078"
        x2="23.918"
        y1="3.223"
        y2="21.223"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#484b4f"></stop>
        <stop offset=".23" stop-color="#656d75"></stop>
        <stop offset=".367" stop-color="#727d86"></stop>
      </linearGradient>
      <path
        fill="url(#keig9XniC3Hl4nj0bxMdNc_F2gKFXx0l438_gr3)"
        d="M36.104,12l-2.845-2.933L30.205,6H17.716l-2.976,3.067L11.896,12H21l6,0h0.001L36.104,12z"
      ></path>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNd_F2gKFXx0l438_gr4"
        x1="26.916"
        x2="32.98"
        y1="23.183"
        y2="23.183"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#a1aab3"></stop>
        <stop offset="1" stop-color="#8f979e"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNd_F2gKFXx0l438_gr4)"
        points="32.98,15 30,15 30,26.416 26.916,29.316 29.137,31.365 32.979,27.75"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNe_F2gKFXx0l438_gr5"
        x1="8.895"
        x2="44.895"
        y1="4.751"
        y2="42.368"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#4b4b4b"></stop>
        <stop offset=".531" stop-color="#393939"></stop>
        <stop offset="1" stop-color="#252525"></stop>
      </linearGradient>
      <path
        fill="url(#keig9XniC3Hl4nj0bxMdNe_F2gKFXx0l438_gr5)"
        d="M24,45.251c-0.74,0-1.48-0.271-2.057-0.814l-14-13.179C7.344,30.695,7,29.898,7,29.075V11.993	c0-0.813,0.336-1.602,0.923-2.165l7.295-6.994C15.78,2.296,16.518,2,17.295,2h13.41c0.777,0,1.515,0.296,2.076,0.834l7.295,6.994	C40.663,10.391,41,11.18,41,11.993v17.082c0,0.824-0.344,1.62-0.943,2.184l-14,13.179C25.48,44.98,24.74,45.251,24,45.251z M17.295,4c-0.259,0-0.505,0.099-0.692,0.278l-7.295,6.993C9.112,11.459,9,11.722,9,11.993v17.082c0,0.274,0.115,0.54,0.314,0.728	l14,13.179c0.384,0.361,0.987,0.361,1.371,0l14-13.179c0.2-0.188,0.314-0.454,0.314-0.728V11.993c0-0.271-0.112-0.534-0.309-0.722	l-7.294-6.993C31.21,4.099,30.964,4,30.705,4H17.295z"
      ></path>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNf_F2gKFXx0l438_gr6"
        x1="11.896"
        x2="36.104"
        y1="10.5"
        y2="10.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#a1aab3"></stop>
        <stop offset="1" stop-color="#8f979e"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNf_F2gKFXx0l438_gr6)"
        points="14.741,9.067 11.896,12 21,12 27,12 36.104,12 33.259,9.067 33.193,9 14.806,9"
      ></polygon>
      <path
        fill="#727d86"
        d="M24,9l-3,3v26.493l3,3.013l3-3.013V12h0.001L24,9z"
      ></path>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNg_F2gKFXx0l438_gr7"
        x1="21.754"
        x2="43.285"
        y1="24.911"
        y2="28.187"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#484b4f"></stop>
        <stop offset=".23" stop-color="#656d75"></stop>
        <stop offset=".367" stop-color="#727d86"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNg_F2gKFXx0l438_gr7)"
        points="24,41.505 27,38.493 27,12 27.001,12 24,9 24,41.505"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNh_F2gKFXx0l438_gr8"
        x1="36.264"
        x2="26.434"
        y1="28.706"
        y2="12.238"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#737b80"></stop>
        <stop offset=".473" stop-color="#686f74"></stop>
        <stop offset="1" stop-color="#575c61"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNh_F2gKFXx0l438_gr8)"
        points="32.98,15 30,15 30,26.416 32.979,27.75"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNi_F2gKFXx0l438_gr9"
        x1="24.257"
        x2="52.001"
        y1="10.482"
        y2="10.567"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#484b4f"></stop>
        <stop offset=".23" stop-color="#656d75"></stop>
        <stop offset=".367" stop-color="#727d86"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNi_F2gKFXx0l438_gr9)"
        points="24,9 27,12 36.104,12 33.259,9.067 33.193,9"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNj_F2gKFXx0l438_gr10"
        x1="48.416"
        x2="45.033"
        y1="14.069"
        y2="39.41"
        gradientTransform="matrix(-1 0 0 1 62.917 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#484b4f"></stop>
        <stop offset=".23" stop-color="#656d75"></stop>
        <stop offset=".367" stop-color="#727d86"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNj_F2gKFXx0l438_gr10)"
        points="11.967,15 11.968,28.908 16.687,33.349 21.052,29.316 17.968,26.416 17.968,15"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNk_F2gKFXx0l438_gr11"
        x1="41.866"
        x2="47.929"
        y1="23.183"
        y2="23.183"
        gradientTransform="matrix(-1 0 0 1 62.917 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#a1aab3"></stop>
        <stop offset="1" stop-color="#8f979e"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNk_F2gKFXx0l438_gr11)"
        points="14.989,15 17.968,15 17.968,26.416 21.052,29.316 18.831,31.365 14.99,27.75"
      ></polygon>
      <linearGradient
        id="keig9XniC3Hl4nj0bxMdNl_F2gKFXx0l438_gr12"
        x1="51.213"
        x2="41.383"
        y1="28.706"
        y2="12.238"
        gradientTransform="matrix(-1 0 0 1 62.917 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#737b80"></stop>
        <stop offset=".473" stop-color="#686f74"></stop>
        <stop offset="1" stop-color="#575c61"></stop>
      </linearGradient>
      <polygon
        fill="url(#keig9XniC3Hl4nj0bxMdNl_F2gKFXx0l438_gr12)"
        points="14.989,15 17.968,15 17.968,26.416 14.99,27.75"
      ></polygon>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="wEI5Zi_x~16_KLNwBqm7Ma_Rqk11fzH1NQq_gr1"
        x1="19.629"
        x2="28.511"
        y1="3.103"
        y2="44.89"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f45560"></stop>
        <stop offset="1" stop-color="#cf1928"></stop>
      </linearGradient>
      <path
        fill="url(#wEI5Zi_x~16_KLNwBqm7Ma_Rqk11fzH1NQq_gr1)"
        fill-rule="evenodd"
        d="M13.046,28.177l5.717,6.432 c0.53,0.596,0.183,1.542-0.606,1.654l-4.747,0.678c-0.263,0.038-0.529-0.031-0.741-0.19l-3.04-2.28 c-0.369-0.277-0.501-0.77-0.319-1.194l2.07-4.83C11.668,27.774,12.559,27.629,13.046,28.177z M32.491,11.245l2.848,1.424 c0.393,0.196,0.611,0.626,0.539,1.059l-0.632,3.794c-0.117,0.703-0.912,1.061-1.516,0.684l-5.345-3.341 c-0.633-0.396-0.625-1.321,0.016-1.705l3.129-1.877C31.822,11.107,32.185,11.093,32.491,11.245z M11.625,11 c0.375,0,0.676,0.016,1.125,0.375c0.565,0.452,21.577,15.319,25.591,18.159c0.386,0.273,0.525,0.77,0.338,1.204 c-0.603,1.401-1.877,4.383-2.423,5.66C36.1,36.766,35.74,37,35.34,37h-2.901c-0.28,0-0.547-0.117-0.736-0.323L9.938,13.02 c-0.47-0.51-0.291-1.334,0.35-1.6C10.819,11.199,11.37,11,11.625,11z M15.243,6.277C15.058,6.097,14.814,6,14.555,6H6 C5.472,6.264,5,6.57,5,7.625V14.5v2.264c0,0.155,0.036,0.308,0.106,0.447l0.671,1.342c0.141,0.282,0.141,0.613,0,0.894L5,21v1l1,1 v1l-0.707,0.707C5.105,24.895,5,25.149,5,25.414v3.172c0,0.265,0.105,0.52,0.293,0.707l0.414,0.414C5.895,29.895,6,30.149,6,30.414 l0,3.092c0,0.296-0.135,0.582-0.364,0.769C4.967,34.822,5,35.122,5,36l0,4.235c0,0.446,0.302,0.837,0.73,0.962 C7.372,41.675,7.638,42,10,42c2.363,0,4,0,4,0c0.614,0,1.228-0.504,1.61-0.795c0.264-0.201,0.624-0.277,0.922-0.131 C17.005,41.307,17.616,42,18.414,42c0.642,0,1.664-1,2.212-1c0.348,0,1.229,0.712,1.229,0.712c0.096,0.048,0.184,0.111,0.26,0.187 l0.592,0.808C22.895,42.895,23.149,43,23.414,43h1.193c0.232,0,0.458-0.076,0.634-0.227C25.579,42.482,26.24,42.014,27,42l4.737,0 c0.16,0,0.315-0.036,0.457-0.111c0.275-0.144,0.788-0.592,1.197-0.791c0.392-0.191,0.862-0.105,1.161,0.21 c0.056,0.059,0.111,0.119,0.162,0.174C34.903,41.689,35.169,42,35.448,42h2.138c0.265,0,0.52-0.105,0.707-0.293l0.279-0.412 c0.264-0.264,0.649-0.361,1.006-0.247c0.325,0.103,1.353,0.732,2.198,0.927C42.402,42.119,43,41.643,43,41V28c0-0.552-0.448-1-1-1 h-1l0.707-0.707C41.895,26.105,42,25.851,42,25.586v-3.35c0-0.155-0.036-0.308-0.106-0.447l-0.572-1.144 c-0.192-0.385-0.117-0.85,0.187-1.154L42,19v-1l0.707-0.707C42.895,17.105,43,16.851,43,16.586v-3.463 c0-0.082-0.01-0.163-0.03-0.243l-0.833-3.331C42.052,9.209,42.152,8.848,42.4,8.6L43,8V7l-0.766-0.766 c-0.152-0.152-0.349-0.251-0.562-0.282l-3.158-0.463l-0.792,0.567l-0.424-0.62C37.111,5.163,36.803,5,36.472,5H31 c-0.617,0-0.999,0.397-0.999,0.993C30.001,6.138,30,7,29,7s-1-1-1-1s0-1-1.149-1h-6.3c-0.336,0-0.649,0.166-0.833,0.447 C19.332,6.036,18.644,7,18.278,7C17.75,7,17.62,7,17,7C16.138,7,15.548,6.573,15.243,6.277z"
        clip-rule="evenodd"
      ></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
    <path d="M0 16H5V33H0zM5 16L14.011 24 22.489 16 22.489 23 14.011 31 5 23zM45 16.196H50V33.196H45zM27.489 33L36.522 25 45 33 45 26 36.522 18 27.489 26zM27.489 21.005L27.489 16 22.489 16 22.489 25.994zM22.489 28.016L22.489 33 27.489 33 27.489 23.027z"></path>
    </svg>,
  ];

  const [date, setDate] = useState("");
  const [game, setGame] = useState("");
  const [emptyText, setEmptyText] = useState(false);
  const [allDatesArr, setAllDatesArr] = useState([]);

  data.forEach((item) => {
    const date = item.Date.split(" ")[0];
    if (!allDatesArr.includes(date)) {
      setAllDatesArr((prev) => [...prev, date]);
    }
  });

  const [renderData, setRenderData] = useState(data);
  const navListMenuItems = allGamesArr.map((item, index) => {
    return {
      title: item,
      icon: allIcons[index],
    };
  });

  function setNewDate(newDate) {
    setDate((prevValue) => {
      if (prevValue === newDate.toLocaleDateString()) {
        return "";
      } else {
        return newDate.toLocaleDateString();
      }
    });
    checkedsFilters();
  }

  function setNewGame(newGame) {
    setGame((prevValue) => {
      if (prevValue === newGame) {
        return "";
      } else {
        return newGame;
      }
    });
    checkedsFilters();
  }

  useEffect(() => {
    checkedsFilters();
  }, [date, game]);

  function checkedsFilters() {
    setRenderData([]);
    setEmptyText(false);
    if (date === "" && game === "") {
      setRenderData(data);
    } else if (date === "" && game !== "") {
      data.forEach((item) => {
        if (item.GameAndFormat.includes(game)) {
          setRenderData((prev) => [...prev, item]);
        }
      });
    } else if (date !== "" && game === "") {
      data.forEach((item) => {
        if (item.Date.includes(date)) {
          setRenderData((prev) => [...prev, item]);
        }
      });
    } else {
      const newFilt = data.find(
        (item) => item.Date.includes(date) && item.GameAndFormat.includes(game)
      );
      if (newFilt) {
        setRenderData([newFilt]);
      } else {
        setEmptyText(true);
        setRenderData([
          {
            GameAndFormat: "Нет данных",
            Date: "",
            StartTime: "",
            PrizeFund: "",
            Name: "",
            Link: "",
          },
        ]);
      }
    }
  }

  return (
    <div class="flex flex-col items-center w-11/12">
      <div
        className="flex flex-col w-full items-center bg-black pb-3"
        style={{ background: "rgba(0,0,0,.6)" }}
      >
        <div className="px-3 py-0.5 rounded-2xl">
          <h1 class="text-3xl shadow-xl">Фильтры</h1>
        </div>
        <div className="flex flex-col items-center mt-3 w-full">
          <div className="flex justify-center gap-4 w-full">
            <MegaMenuDefault
              navListMenuItems={navListMenuItems}
              onChange={setNewGame}
            />
            <Picker allData={allDatesArr} filters={setNewDate} />
          </div>
        </div>
      </div>
      <div class="flex justify-center h-full w-full">
        <div class="flex flex-col w-full justify-center">
          <div class="flex justify-center mb-1">
            <h1 class="text-2xl">Турниры</h1>
          </div>
          <div id="allitems" class="flex flex-col gap-3 w-full">
            {emptyText ? <div
                  class="flex flex-col gap-2 bg-gray-800 p-2 rounded-xl w-full justify-center items-center"
                >Нет данных<a className=" bg-red-900 px-3 py-1 rounded-lg" href="/tournaments">Сбросить Фильтры</a> </div>: renderData.map((item, index) => {
              return (
                <div
                  class="flex gap-2 bg-gray-800 p-2 rounded-xl w-full justify-between"
                  key={index}
                >
                  <div>
                    <h1
                      className={`text-2xl ${emptyText ? "text-center" : ""}`}
                    >
                      {item.GameAndFormat}
                    </h1>
                    <p>{item.Date}</p>
                    <p>{item.Name === "cyberxcommunity.ru" ? `Детали начала турнира:` : item.StartTime} {item.Name === "cyberxcommunity.ru" ? <a href={item.StartTime} style={{textDecoration:"underline"}}>{item.StartTime}</a> : ""}</p>
                    <p>{item.Name === "cyberxcommunity.ru" ? `Призовой фонд: ${item.PrizeFund}` : item.PrizeFund}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-3 items-end h-full mr-7">
                    <a
                      className="flex justify-center items-center gap-2 text-2xl"
                      href={item}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-map"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                        />
                      </svg>
                      Map
                    </a>
                    <a
                      className="flex justify-center items-center  gap-2 text-2xl"
                      href={item.Link}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-globe-americas mt-1.5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                      </svg>
                      <p id="site">{item.Name}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
