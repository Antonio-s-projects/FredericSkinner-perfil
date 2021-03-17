import ColaborationImg from '../static/images/img-colaboration.png';
import ExperimetsImg from '../static/images/img-experiments.png';
import TheoryImg from '../static/images/img-theory.png';

const Notices = () => {
  const view = `
    <div class ="notices__colaboration">
      <img src="${ColaborationImg}" alt="colaboration image"/>
      <div class ="notices__colaboration--paragraph">
        <p>Colaboraciones</p>
      </div>
    </div>
    <div class ="notices__experiments">
      <img src="${ExperimetsImg}" alt="experiments image"/>
      <div class="notices__experiments--paragraph">
        <p>Experimentos</p>
      </div>
    </div>
    <div class ="notices__theory">
      <img src="${TheoryImg}" alt="Theory image"/>
      <div class ="notices__theory--paragraph">
        <p>Teoría de Skinner</p>      
      </div>
    </div>
  `;

  return view;
};

export default Notices;