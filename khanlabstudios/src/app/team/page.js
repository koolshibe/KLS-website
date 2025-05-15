import styles from '../../globals.module.css';
import {MemberCard} from '@/app/components/member.js';

export default function Page() {
    return (
        <div className="container text-center mt-5">
            <MemberCard student={"abobb"} bio={"Help"} studentID={2}/>
            <MemberCard student={"vidit"} bio={"Vidit is a curious and creative learner who loves exploring new ideas. Whether he's building something with code, solving tricky puzzles, or diving into a new book, Vidit always brings enthusiasm and a positive attitude. He enjoys working with friends, asking great questions, and finding fun ways to learn and grow every day. "} studentID={3}/>
            <MemberCard student={"Ankur"} bio={"Ankur is a passionate and curious learner who loves to explore new ideas and concepts. He enjoys working on projects that challenge him to think critically and creatively. In his free time, Ankur likes to read, play video games, and spend time with friends."} studentID={4}/>
        </div>
    );
}