import React from 'react'
import img1 from '../Images/depimg.jpg'
import { Link } from 'react-router-dom';
import { useState } from "react";
import ReadMoreBtn from './ReadMoreBtn'

function EventCard() {
    return (<>

    <article class="post-card post tag-weekly ">
      <a class="post-card-image-link">
        <img
          class="post-card-image"
          sizes="(max-width: 1000px) 400px, 700px"
          src='/'
          alt="Weekly Wrapup: ITC Business breakdown"
        />
      </a>

      <div class="post-card-content">
        <a class="post-card-content-link">
          <header class="post-card-header">
            <h2 class="post-card-title">
              Weekly Wrapup: ITC Business breakdown
            </h2>
          </header>

          <section class="post-card-excerpt">
            <p>An explainer on how ITC is structured</p>
          </section>
        </a>

        <footer class="post-card-meta">
          <time class="post-full-meta-date" datetime="2023-04-15">
            15 April 2023
          </time>
          <span class="reading-time">6 min read</span>
        </footer>
      </div>
      <ReadMoreBtn title="Hello" />
    </article>

    </>
    )
}

// const list = [
//     { id: "1", dep: "Applied Science and Engineering", depImg: img1 },
//     { id: " 2", dep: "Architecture & Planning", depImg: img1 },
//     { id: "3", dep: "Biosciences and Bioengineering", depImg: img1 },
//     { id: 4, dep: "Chemical Engineering", depImg: img1 },
//     { id: 5, dep: "Chemistry", depImg: img1 },
//     { id: 6, dep: "Civil Engineering", depImg: img1 },
//     { id: 7, dep: "Computer Science and Engineering", depImg: img1 },
//     { id: 8, dep: "Design", depImg: img1 },
//     { id: 9, dep: "Earthquake Engineering", depImg: img1 },
//     { id: 10, dep: "Earth Sciences", depImg: img1 },
//     { id: 11, dep: "Electrical Engineering", depImg: img1 },
//     { id: 12, dep: "Electronics and Communication Engineering", depImg: img1 },
//     { id: 13, dep: "Humanities and Social Sciences", depImg: img1 },
//     { id: 14, dep: "Hydrology", depImg: img1 },
//     { id: 15, dep: "Hydro and Renewable Energy", depImg: img1 },
//     { id: 16, dep: "Management studies", depImg: img1 },
//     { id: 17, dep: "Mathematics", depImg: img1 },
//     { id: 18, dep: "Mechanical and Industrial Engineering", depImg: img1 },
//     { id: 19, dep: "Metallurgical and Materials Engineering", depImg: img1 },
//     { id: 20, dep: "Paper Technology", depImg: img1 },
//     { id: 21, dep: "Physics", depImg: img1 },
//     { id: 22, dep: "Polymer and Process Engineering", depImg: img1 },
//     { id: 23, dep: "Water Resources Development and Management", depImg: img1 },
// ];

export default EventCard