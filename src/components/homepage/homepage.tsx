"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from './homepage.module.css';
import { useRouter } from 'next/router';
import apartment from '../../../public/apartment.jpeg';

export default function Home() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles['desktop-banner-image']}>
            <Image
                src={apartment} 
                alt="Desktop Banner"
                width={1000} 
                height={500} 
            />
        </div>

        <div className={styles.content}>
            <svg width="726" height="226" viewBox="0 0 726 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M97.0608 203.961C97.3979 200.543 99.4823 196.942 105.184 196.942C110.885 196.942 113.092 200.099 113.092 203.409C113.092 206.199 111.329 207.716 109.889 208.298V208.375C111.835 209.034 114.119 210.689 114.119 214.444C114.119 218.199 111.697 222.061 105.138 222.061C99.329 222.061 96.8309 218.751 96.5703 214.965H101.429C101.766 216.774 102.793 218.199 105.368 218.199C107.942 218.199 109.015 216.758 109.015 214.49C109.015 211.839 107.544 210.735 104.755 210.735H102.915V206.796H104.417C106.961 206.796 108.126 206.061 108.126 203.777C108.126 201.831 107.099 200.727 105 200.727C102.9 200.727 101.873 201.861 101.613 203.961H97.0454H97.0608Z" fill="white" />
                <path d="M178.06 212.283C178.06 208.022 178.137 202.873 178.244 200.037H178.06C176.926 205.264 174.351 214.567 172.175 221.709H167.73C166.106 215.716 163.469 205.126 162.427 199.976H162.213C162.427 202.919 162.55 208.406 162.55 212.743V221.724H157.845V196.528H165.538C167.347 202.413 169.585 211.21 170.29 215.026H170.32C170.872 211.747 173.784 202.49 175.654 196.528H183.041V221.724H178.075V212.314L178.06 212.283Z" fill="white" />
                <path d="M131.161 221.693V216.069H120.463V211.685L129.628 197.233H135.774V212.022H138.379L137.935 216.069H135.758V221.693H131.161ZM131.161 206.72C131.161 203.961 131.161 202.597 131.268 200.942C129.98 203.547 126.701 208.881 124.938 212.007H131.161V206.704V206.72Z" fill="white" />
                <path d="M196.451 215.701L194.689 221.693H189.646C189.984 220.697 196.972 197.601 197.34 196.497H203.992L212.084 221.693H206.72L204.804 215.701H196.451ZM203.762 211.471C202.214 206.352 201.11 202.75 200.528 200.405H200.497C199.915 203.195 198.766 207.133 197.448 211.471H203.777H203.762Z" fill="white" />
                <path d="M222.092 214.26C222.459 216.544 223.931 218.046 226.613 218.046C229.479 218.046 230.506 216.789 230.506 214.996C230.506 212.712 229.111 211.762 225.463 210.735C219.609 209.111 217.632 207.026 217.632 203.379C217.632 198.704 221.387 196.175 226.168 196.175C232.237 196.175 234.782 199.302 235.073 203.348H230.03C229.693 201.509 228.82 200.068 226.138 200.068C223.854 200.068 222.751 201.141 222.751 202.903C222.751 204.773 224.038 205.294 227.609 206.321C234.046 208.191 235.701 210.766 235.701 214.413C235.701 218.49 232.973 222.031 226.398 222.031C220.881 222.031 217.31 219.241 217.019 214.276H222.092V214.26Z" fill="white" />
                <path d="M264.652 208.973C264.652 216.222 261.158 222.061 253.219 222.061C245.28 222.061 242.107 216.069 242.107 208.927C242.107 202.704 245.494 196.16 253.541 196.16C261.587 196.16 264.652 202.198 264.652 208.957V208.973ZM247.395 208.927C247.395 213.969 249.418 217.969 253.388 217.969C257.801 217.969 259.38 214.26 259.38 208.957C259.38 204.329 257.801 200.237 253.311 200.237C249.157 200.237 247.395 204.068 247.395 208.927Z" fill="white" />
                <path d="M272.484 221.693V196.497H279.029C286.538 211.839 287.749 214.337 288.117 215.548H288.194C287.933 212.528 287.903 208.406 287.903 204.298V196.497H292.608V221.693H286.324C278.262 204.804 277.389 202.781 277.021 201.831H276.99C277.174 205.034 277.174 209.371 277.174 213.892V221.693H272.5H272.484Z" fill="white" />
                <path d="M317.835 214.26C318.203 216.544 319.674 218.046 322.356 218.046C325.222 218.046 326.249 216.789 326.249 214.996C326.249 212.712 324.854 211.762 321.206 210.735C315.352 209.111 313.375 207.026 313.375 203.379C313.375 198.704 317.13 196.175 321.911 196.175C327.981 196.175 330.525 199.302 330.816 203.348H325.774C325.436 201.509 324.563 200.068 321.881 200.068C319.597 200.068 318.494 201.141 318.494 202.903C318.494 204.773 319.781 205.294 323.352 206.321C329.789 208.191 331.444 210.766 331.444 214.413C331.444 218.49 328.716 222.031 322.141 222.031C316.624 222.031 313.053 219.241 312.762 214.276H317.835V214.26Z" fill="white" />
                <path d="M343.873 200.727H337.068V196.497H355.904V200.727H349.069V221.693H343.889V200.727H343.873Z" fill="white" />
                <path d="M357.896 226C358.785 224.161 359.996 220.007 360.257 215.854H365.008C364.855 219.348 363.613 223.609 361.728 226H357.896Z" fill="white" />
                <path d="M385.224 196.497H393.975C401.623 196.497 405.853 201.172 405.853 208.559C405.853 216.758 401.439 221.693 393.791 221.693H385.224V196.497ZM390.419 217.647H393.73C398.22 217.647 400.534 214.306 400.534 208.635C400.534 203.961 398.435 200.62 393.76 200.62H390.419V217.647Z" fill="white" />
                <path d="M417.194 215.701L415.431 221.693H410.389C410.726 220.697 417.715 197.601 418.082 196.497H424.734L432.826 221.693H427.462L425.546 215.701H417.194ZM424.519 211.471C422.971 206.352 421.868 202.75 421.286 200.405H421.255C420.673 203.195 419.523 207.133 418.205 211.471H424.535H424.519Z" fill="white" />
                <path d="M439.448 221.693V196.497H445.993C453.502 211.839 454.713 214.337 455.081 215.548H455.158C454.897 212.528 454.866 208.406 454.866 204.298V196.497H459.571V221.693H453.288C445.226 204.804 444.353 202.781 443.985 201.831H443.954C444.138 205.034 444.138 209.371 444.138 213.892V221.693H439.464H439.448Z" fill="white" />
                <path d="M468.568 196.497H477.32C484.967 196.497 489.197 201.172 489.197 208.559C489.197 216.758 484.783 221.693 477.136 221.693H468.568V196.497ZM473.749 217.647H477.059C481.55 217.647 483.864 214.306 483.864 208.635C483.864 203.961 481.764 200.62 477.09 200.62H473.749V217.647Z" fill="white" />
                <path d="M512.983 210.689H502.025V217.463H514.132L513.504 221.693H497.028V196.497H513.473V200.727H502.04V206.428H512.998V210.689H512.983Z" fill="white" />
                <path d="M521.643 221.693V196.497H528.187C535.697 211.839 536.907 214.337 537.275 215.548H537.352C537.091 212.528 537.061 208.406 537.061 204.298V196.497H541.766V221.693H535.482C527.421 204.804 526.547 202.781 526.179 201.831H526.148C526.332 205.034 526.332 209.371 526.332 213.892V221.693H521.658H521.643Z" fill="white" />
                <path d="M572.141 208.973C572.141 216.222 568.647 222.061 560.708 222.061C552.769 222.061 549.597 216.069 549.597 208.927C549.597 202.704 552.984 196.16 561.03 196.16C569.076 196.16 572.141 202.198 572.141 208.957V208.973ZM554.9 208.927C554.9 213.969 556.923 217.969 560.892 217.969C565.306 217.969 566.885 214.26 566.885 208.957C566.885 204.329 565.306 200.237 560.815 200.237C556.662 200.237 554.9 204.068 554.9 208.927Z" fill="white" />
                <path d="M579.974 221.693V196.497H586.518C594.028 211.839 595.238 214.337 595.606 215.548H595.683C595.422 212.528 595.392 208.406 595.392 204.298V196.497H600.097V221.693H593.813C585.752 204.804 584.878 202.781 584.51 201.831H584.479C584.663 205.034 584.663 209.371 584.663 213.892V221.693H579.989H579.974Z" fill="white" />
                <path d="M629.141 221.693H625.355C625.171 220.881 625.018 219.701 624.987 218.751C623.669 221.295 621.156 222.061 617.999 222.061C611.378 222.061 607.914 216.574 607.914 209.218C607.914 201.861 611.991 196.16 619.424 196.16C625.417 196.16 628.543 199.501 629.171 203.7H624.129C623.654 202.122 622.551 200.283 619.133 200.283C614.75 200.283 613.171 204.482 613.171 209.264C613.171 214.046 614.857 217.984 619.133 217.984C622.918 217.984 624.022 215.333 624.022 212.099V211.992H618.765V207.609H629.141V221.693Z" fill="white" />
                <path d="M50.7604 148.848C53.3505 148.848 55.864 148.204 58.3162 146.902C60.7684 145.599 62.8834 143.959 64.6919 141.936C66.485 139.928 68.2169 137.691 69.8721 135.238C71.5273 132.786 72.8607 130.303 73.8723 127.79C74.8838 125.276 75.7727 123.008 76.5697 120.985C77.3666 118.977 77.9797 117.307 78.4088 116.019L78.8379 114.073L70.6231 152.741L0.199241 153.17C4.09209 153.17 7.29527 152.097 9.80876 149.936C12.3223 147.775 13.4411 144.97 13.1499 141.507V13.6096C13.579 10.1613 12.4602 7.34123 9.80876 5.18024C7.15733 3.01924 3.89285 1.94641 0 1.94641H53.1359C45.2123 1.94641 41.2581 5.83926 41.2581 13.6096V148.848H50.7604Z" fill="#E62629" />
                <path d="M155.362 0C167.746 0 178.903 2.23762 188.85 6.69755C198.781 11.1575 206.812 16.9967 212.943 24.2001C219.058 31.4034 223.809 39.6489 227.196 48.9365C230.583 58.2242 232.269 67.6958 232.269 77.3513C232.269 87.0068 230.614 96.4631 227.303 105.751C223.993 115.038 219.272 123.33 213.157 130.594C207.042 137.874 198.965 143.698 188.957 148.097C178.949 152.496 167.792 154.687 155.469 154.687C143.147 154.687 131.99 152.496 121.982 148.097C111.974 143.698 103.912 137.874 97.7817 130.594C91.6512 123.33 86.9461 115.038 83.6356 105.751C80.3251 96.4631 78.6699 86.9915 78.6699 77.3513C78.6699 67.7111 80.3251 58.2395 83.6356 48.9365C86.9461 39.6489 91.6665 31.4034 97.7817 24.2001C103.897 16.9967 111.958 11.1728 121.982 6.69755C131.99 2.23762 143.117 0 155.362 0ZM198.996 135.882C205.908 130.549 210.475 123.636 212.713 115.146C214.95 106.655 214.904 97.9037 212.606 88.8919C210.307 79.8954 206.659 70.6691 201.693 61.2435C196.728 51.8179 190.536 43.5264 183.118 36.3997C175.7 29.273 167.991 23.2652 160.006 18.3608C152.021 13.4717 143.76 11.0962 135.27 11.2341C126.764 11.372 118.993 13.9775 111.943 19.0045C104.878 24.4759 100.234 31.4953 98.0116 40.0627C95.774 48.63 95.8199 57.4119 98.1189 66.4237C100.418 75.4202 104.065 84.6006 109.031 93.9649C113.997 103.329 120.219 111.575 127.714 118.701C135.193 125.828 142.979 131.805 151.04 136.633C159.102 141.461 167.378 143.806 175.884 143.652C184.375 143.514 192.084 140.924 198.996 135.882Z" fill="#E62629" />
                <path d="M292.057 103.268V16.629C290.907 6.83553 286.723 1.94648 279.52 1.94648H309.973C301.191 1.94648 296.931 9.07316 297.222 23.3265L296.793 153.584H273.252L251.872 47.5112L252.515 131.759C252.086 146.013 256.331 153.139 265.267 153.139H234.814C241.588 153.139 245.618 149.032 246.906 140.832L246.048 22.6675C246.186 16.0466 245.358 10.9276 243.565 7.32597C241.756 3.72432 238.339 1.93115 233.312 1.93115H270.033L292.072 103.253L292.057 103.268Z" fill="#E62629" />
                <path d="M347.476 4.32204C342.433 4.32204 338.694 6.45238 336.241 10.6977C333.789 14.9431 332.563 19.6636 332.563 24.8438C332.563 29.3037 334.188 33.9476 337.422 38.7753C340.655 43.6031 344.579 48.4308 349.192 53.2433C353.805 58.071 358.403 63.1746 363.016 68.5848C367.629 73.9796 371.553 80.4626 374.787 88.0337C378.021 95.5895 379.645 103.62 379.645 112.126C379.645 124.939 376.411 135.238 369.928 143.024C363.445 150.794 354.372 154.687 342.709 154.687C341.268 154.687 339.261 154.396 336.655 153.829C334.065 153.247 331.797 152.756 329.85 152.312C327.904 151.883 325.82 151.622 323.582 151.561C321.344 151.484 319.95 151.883 319.367 152.756L318.509 114.088C319.521 119.56 320.639 124.249 321.85 128.127C323.076 132.02 324.624 135.729 326.494 139.254C328.364 142.779 330.709 145.492 333.513 147.361C336.318 149.231 339.521 150.166 343.123 150.166C352.058 150.166 356.518 143.683 356.518 130.717C356.518 123.514 355.399 116.786 353.177 110.517C350.939 104.249 348.165 98.9613 344.855 94.6393C341.544 90.3173 337.973 85.7808 334.157 81.0296C330.341 76.2785 326.77 71.8493 323.459 67.7418C320.149 63.6344 317.406 58.6687 315.245 52.8294C313.084 46.9902 312.011 40.8444 312.011 34.3614C312.011 11.464 323.03 0.0153809 345.069 0.0153809C347.522 0.0153809 350.403 0.306579 353.713 0.873648C357.024 1.45604 359.399 1.8392 360.84 2.05376C362.281 2.26833 363.721 2.16105 365.162 1.73191L367.108 43.6337C366.817 42.0551 366.419 39.5263 365.913 36.0779C365.407 32.6142 364.947 29.6716 364.503 27.2194C364.074 24.7672 363.43 22.0085 362.557 18.8972C361.698 15.8014 360.641 13.2879 359.43 11.3414C358.204 9.39501 356.579 7.73978 354.572 6.37575C352.549 5.01172 350.173 4.32204 347.445 4.32204H347.476Z" fill="#E62629" />
                <path d="M423.769 1.94648C430.973 1.94648 437.593 3.67834 443.647 7.12673C449.701 10.5905 454.667 15.2343 458.56 21.0582C462.453 26.8975 465.717 33.5491 468.384 41.0436C471.051 48.5381 472.66 56.4617 473.242 64.7992C473.809 73.152 473.809 81.5047 473.242 89.8575C472.66 98.2103 471.005 106.165 468.277 113.736C465.533 121.292 462.223 127.989 458.345 133.828C454.452 139.668 449.487 144.265 443.433 147.653C437.379 151.04 430.758 152.726 423.555 152.726L383.584 153.155C391.508 152.434 395.324 145.308 395.033 131.775V22.8974C395.171 16.5677 394.42 11.5867 392.764 7.985C391.109 4.38334 388.044 2.37561 383.584 1.93115H423.769V1.94648ZM428.306 148.848C432.337 148.128 435.724 142.733 438.467 132.648C441.195 122.564 442.866 110.579 443.433 96.6777C444 82.7768 443.969 68.9219 443.326 55.0977C442.682 41.2735 440.919 29.6103 438.038 20.108C435.157 10.6058 431.632 5.85466 427.448 5.85466H424.428L424.214 149.078L428.321 148.863L428.306 148.848Z" fill="#E62629" />
                <path d="M555.008 133.506C556.02 139.852 557.521 144.633 559.545 147.867C561.552 151.101 564.648 152.879 568.832 153.155L512.662 152.725C515.114 152.588 517.168 151.898 518.823 150.672C520.478 149.446 521.628 147.76 522.271 145.599C522.915 143.438 523.39 141.384 523.681 139.438C523.972 137.491 523.926 135.008 523.574 131.989C523.206 128.97 522.884 126.656 522.608 125.077C522.317 123.498 521.888 121.337 521.306 118.594C521.152 117.445 521.014 116.648 520.877 116.219L491.925 115.36C491.787 115.943 491.558 116.878 491.282 118.165C490.699 121.337 490.27 123.744 489.979 125.399C489.688 127.054 489.366 129.399 489.013 132.418C488.646 135.438 488.584 137.89 488.799 139.76C489.013 141.629 489.443 143.622 490.102 145.706C490.745 147.79 491.833 149.415 493.335 150.564C494.853 151.714 496.83 152.434 499.282 152.725H467.312C469.61 152.434 471.664 151.76 473.473 150.672C475.266 149.584 476.676 148.48 477.687 147.331C478.699 146.181 479.664 144.311 480.599 141.721C481.534 139.131 482.224 136.94 482.653 135.131C483.082 133.338 483.665 130.564 484.385 126.809C484.676 125.506 484.891 124.51 485.029 123.79L505.98 25.7173L503.175 6.2684L531.697 1.94641L555.023 133.506H555.008ZM494.086 109.306H519.788L509.857 36.0778H508.999L494.086 109.306Z" fill="#E62629" />
                <path d="M620.267 148.848C622.857 148.848 625.371 148.204 627.823 146.902C630.275 145.599 632.39 143.959 634.198 141.936C635.992 139.928 637.723 137.691 639.379 135.238C641.034 132.786 642.367 130.303 643.379 127.79C644.39 125.276 645.279 123.008 646.076 120.985C646.873 118.977 647.486 117.307 647.915 116.019L648.344 114.073L640.13 152.741L569.706 153.17C573.599 153.17 576.802 152.097 579.315 149.936C581.829 147.775 582.948 144.97 582.656 141.507V13.6096C583.086 10.1613 581.967 7.34123 579.315 5.18024C576.649 3.01924 573.369 1.94641 569.491 1.94641H622.627C614.703 1.94641 610.749 5.83926 610.749 13.6096V148.848H620.252H620.267Z" fill="#E62629" />
                <path d="M697.679 148.848C700.269 148.848 702.783 148.204 705.235 146.902C707.687 145.599 709.802 143.959 711.611 141.936C713.404 139.928 715.105 137.691 716.683 135.238C718.262 132.786 719.595 130.303 720.684 127.79C721.756 125.276 722.691 123.008 723.488 120.985C724.285 118.977 724.898 117.307 725.327 116.019L725.757 114.073L717.542 152.741L665.908 153.17H646.903C655.685 153.17 659.931 146.043 659.655 131.79L660.084 111.054L659.655 22.9127C659.793 16.2918 658.965 11.1422 657.172 7.46389C655.363 3.78561 651.946 1.96179 646.903 1.96179H714.308L718.201 45.1663C718.047 44.3081 717.588 42.0704 716.791 38.4688C715.994 34.8671 714.844 30.4838 713.342 25.2883C711.825 20.108 709.741 15.5715 707.074 11.6786C704.407 7.78575 701.71 5.83932 698.966 5.83932H688.161V70.6538H692.054C694.782 70.6538 697.204 69.9028 699.288 68.3855C701.373 66.8682 702.997 65.1517 704.147 63.2053C705.296 61.2588 706.231 59.0672 706.951 56.615C707.672 54.1628 708.101 52.3696 708.254 51.2202C708.392 50.0707 708.545 49.2124 708.683 48.63V104.801C708.545 104.08 708.423 103.038 708.361 101.674C708.285 100.31 707.886 97.9344 707.181 94.5473C706.461 91.1602 705.557 88.2176 704.484 85.6888C703.411 83.1753 701.786 80.8304 699.625 78.6694C697.464 76.5084 694.936 75.4356 692.07 75.4356H688.177V148.879H697.679V148.848Z" fill="#E62629" />
                <path d="M120.051 58.3009H139.346L141.17 68.8913C141.093 68.7074 140.955 68.2629 140.726 67.5579C140.511 66.8529 140.342 66.3778 140.25 66.1173C140.159 65.8567 139.99 65.4276 139.745 64.8452C139.499 64.2628 139.285 63.8337 139.101 63.6038C138.917 63.3739 138.657 63.0367 138.319 62.6382C137.982 62.2244 137.66 61.9485 137.323 61.7799C136.986 61.6114 136.572 61.4581 136.082 61.3048C135.576 61.1516 135.055 61.0903 134.503 61.0903H133.553V94.3634C134.074 96.2179 135.177 97.1375 136.879 97.1375L132.005 97.0302L127.622 97.1375H122.748C125.047 97.1375 126.135 95.3137 126.028 91.6507L126.135 86.3325V61.0903H124.802C124.25 61.0903 123.729 61.1669 123.254 61.3048C122.779 61.4581 122.349 61.6114 122.012 61.7799C121.66 61.9485 121.323 62.2397 120.985 62.6382C120.648 63.052 120.388 63.3739 120.204 63.6038C120.02 63.8337 119.805 64.2628 119.56 64.8452C119.315 65.4429 119.146 65.8567 119.054 66.1173C118.962 66.3778 118.809 66.8529 118.579 67.5579C118.365 68.2629 118.211 68.7074 118.135 68.8913L120.02 58.3009H120.051Z" fill="#E62629" />
                <path d="M154.932 58.3009H169.124C167.975 58.4082 167.147 58.914 166.626 59.8029C166.105 60.6918 165.844 61.7953 165.844 63.1287V91.6354C165.844 95.1144 166.932 96.9382 169.124 97.1221H154.932C157.047 96.9382 158.135 95.329 158.212 92.2944V76.8762H151.668V92.9534C151.959 95.5742 153.032 96.9689 154.886 97.1068H141.077C142.671 96.9536 143.683 95.9574 144.127 94.1182V61.2895C143.683 59.435 142.671 58.4388 141.077 58.3009H154.886C153.032 58.4542 151.959 59.8335 151.668 62.4543V75.88H158.212V63.1287C158.135 60.0941 157.047 58.4848 154.932 58.3009Z" fill="#E62629" />
                <path d="M182.995 96.0033C183.654 96.0033 184.313 95.8347 184.941 95.4976C185.57 95.1604 186.122 94.7466 186.581 94.2255C187.041 93.7044 187.47 93.1373 187.884 92.509C188.298 91.8806 188.635 91.2369 188.911 90.5932C189.187 89.9495 189.432 89.3671 189.631 88.846C189.831 88.3249 189.999 87.8958 190.106 87.5739L190.214 87.0682L188.099 96.9995L174.842 97.1068H169.968C172.221 97.1068 173.309 95.283 173.248 91.62L173.355 86.3019L173.248 63.6804C173.278 61.9792 173.079 60.6611 172.604 59.7109C172.144 58.7607 171.27 58.3009 169.968 58.3009H187.271L188.267 69.3971C188.237 69.1672 188.114 68.6001 187.899 67.6805C187.7 66.761 187.394 65.6268 187.01 64.2934C186.627 62.9601 186.091 61.7953 185.401 60.7991C184.712 59.8029 184.022 59.2971 183.317 59.2971H180.543V75.9413H181.539C182.244 75.9413 182.857 75.7421 183.394 75.359C183.93 74.9758 184.344 74.5313 184.635 74.0256C184.926 73.5198 185.171 72.9681 185.355 72.3397C185.539 71.7113 185.646 71.2515 185.692 70.9603C185.723 70.6691 185.769 70.4392 185.8 70.3013V84.7233C185.769 84.5393 185.738 84.2635 185.723 83.9263C185.708 83.5738 185.6 82.9607 185.417 82.1025C185.233 81.2289 185.003 80.4779 184.727 79.8342C184.451 79.1905 184.037 78.5928 183.485 78.0257C182.934 77.474 182.29 77.1981 181.539 77.1981H180.543V96.0493H182.98L182.995 96.0033Z" fill="#E62629" />
            </svg>
          <div className={styles.homepagetext}>
            Low maintenance living at an affordable price, in a vibrant 
            <br />
            location right in the heart of Dandenong.
            <p>
            <br/>
            There's a range of contemporary designed 1,2 and 3
            <br/>
            bedroom apartments to suit all lifestyles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}