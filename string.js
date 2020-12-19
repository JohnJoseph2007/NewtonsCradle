class BobString {
    constructor(bodya, bodyb, pointx){
        var options = {
            bodyA : bodya,
            bodyB : bodyb,
            length : 600,
            stiffness : 1.5
        }
        this.body = Matter.Constraint.create(options);
        this.ptx = pointx
        World.add(world, this.body);
    }

    display() {
        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;
        stroke("black");
        strokeWeight(2);
        line(posa.x, posa.y, posb.x+this.ptx, posb.y);
    }
}