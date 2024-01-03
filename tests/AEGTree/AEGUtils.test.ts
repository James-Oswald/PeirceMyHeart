import {describe, expect, test} from "vitest";
import {Ellipse} from "../../src/AEG/Ellipse";
import {Point} from "../../src/AEG/Point";
import {Rectangle} from "../../src/AEG/Rectangle";
import {
    getEllipsePoints,
    pointInRect,
    shapeContains,
    shapesOverlap,
    signedDistanceFromEllipse,
} from "../../src/AEG/AEGUtils";

/**
 * Contains comprehensive tests all exported AEGUtils methods.
 *
 * @author Ryan R
 */

const testRect: Rectangle = new Rectangle(new Point(0, 0), 10, 10);
const testEllipse: Ellipse = new Ellipse(new Point(5, 5), 10, 10);

describe("AEGUtils shapesOverlap soliloquy:", () => {
    //Rectangle-on-(otherShape) overlapping starts here
    test.each([
        [0, 5, 2, 2], //Arbitrary but inside
        [0, -5, 10, 10], //Arbitrary but outside
        [0, 5, 100, 100], //This Rectangle contains testRect
    ])(
        "Rectangle with TL vertex (0, 0), {w, h} = 10 should overlap Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapesOverlap(testRect, new Rectangle(new Point(x, y), w, h))).toBeTruthy();
        }
    );

    test.each([
        [0, 50, 7, 7], //Arbitrary fellas that should not overlap
        [0, -40, 3, 2],
    ])(
        "Rectangle with TL vertex (0, 0), {w, h} = 10 should not overlap Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapesOverlap(testRect, new Rectangle(new Point(x, y), w, h))).toBeFalsy();
        }
    );

    test.each([
        [0, 10, 1, 2], //Arbitrary but inside
        [0, 15, 6, 6], //Arbitrary but outside
        [0, 10, 20, 20], //Ellipse contains testRect
    ])(
        "Rectangle with TL vertex (0, 0), {w, h} = 10 should overlap Ellipse of center (%f, %f) and radX = %f and radY = %f.",
        (x, y, rx, ry) => {
            expect(shapesOverlap(testRect, new Ellipse(new Point(x, y), rx, ry))).toBeTruthy();
        }
    );

    test.each([
        [0, 50, 1, 1], //Arbitrary fellas that should not overlap
        [0, -40, 5, 5],
    ])(
        "Rectangle with TL vertex (0, 0), {w, h} = 10 should not overlap Ellipse of center (%f, %f) and radX = %f and radY = %f.",
        (x, y, rx, ry) => {
            expect(shapesOverlap(testRect, new Ellipse(new Point(x, y), rx, ry))).toBeFalsy();
        }
    );

    //Ellipse-on-(otherShape) overlapping starts here
    test.each([
        [5, 5, 10, 10], //Arbitrary but inside
        [5, 10, 20, 20], //Arbitrary but outside
        [0, 10, 100, 100], //This Rectangle contains testEllipse
    ])(
        "Ellipse with center (10, 10) and {radX, radY} = 10 should overlap Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapesOverlap(testEllipse, new Rectangle(new Point(x, y), w, h))).toBeTruthy();
        }
    );

    test.each([
        [20, 20, 1, 1], //Arbitrary fellas that should not overlap
        [0, 20, 10, 10],
    ])(
        "Ellipse with center (10, 10) and {radX, radY} = 10 should not overlap Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapesOverlap(testEllipse, new Rectangle(new Point(x, y), w, h))).toBeFalsy();
        }
    );

    test.each([
        [5, 5, 15, 15], //Arbitrary but inside
        [5, 10, 5, 20], //Arbitrary but outside
        [0, 10, 100, 100], //This Ellipse contains testEllipse
    ])(
        "Ellipse with center (10, 10) and {radX, radY} = 10 should overlap Ellipse of center (%f, %f) and radX = %f and radY = %f.",
        (x, y, rx, ry) => {
            expect(shapesOverlap(testEllipse, new Rectangle(new Point(x, y), rx, ry))).toBeTruthy();
        }
    );

    test.each([
        [100, 100, 1, 1], //Arbitrary fellas that should not overlap
        [0, 0, 0.1, 0.1],
    ])(
        "Ellipse with center (10, 10) and {radX, radY} = 10 should not overlap Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapesOverlap(testEllipse, new Rectangle(new Point(x, y), w, h))).toBeFalsy();
        }
    );
});

describe.skip("AEGUtils shapesIntersect soliloquy:", () => {
    test.each([
        [5, 5, 1, 1], //Arbitrary fellas
        [2, 2, 0.1, 0.1],
    ])(
        "Rectangle with TL vertex (0, 0), {w, h} = 10 should contain Rectangle of TL vertex (%f, %f) and w = %f and h = %f.",
        (x, y, w, h) => {
            expect(shapeContains(testRect, new Rectangle(new Point(x, y), w, h))).toBeTruthy();
        }
    );
});

describe("AEGUtils shapeContains soliloquy:", () => {
    test("Skellington!", () => {
        expect(true).toBeTruthy();
    });
});

describe("AEGUtils pointInRect soliloquy:", () => {
    test.each([
        [5, 5], //Arbitrary fellas
        [8, 5],
        [0.25, 0.33],
    ])("Rectangle with TL vertex (0, 0) and {w, h} = 10 should contain Point (%f, %f).", (x, y) => {
        expect(pointInRect(testRect, new Point(x, y))).toBeTruthy();
    });

    test.each([
        [0, 10], //Corners
        [10, 10],
        [10, 0],
        [0, 0],
        [0, 5], //Midpoints of the edges
        [10, 5],
        [5, 10],
        [5, 0],
    ])(
        "Rectangle with TL vertex (0, 0) and {w, h} = 10 should not contain Point (%f, %f).",
        (x, y) => {
            expect(pointInRect(testRect, new Point(x, y))).toBeFalsy();
        }
    );
});

//(x-h)^2/rx^2 + (y-k)^2/ry^2 <= 1
//(x, y) = new point
//(h, k) = center
describe("AEGUtils signedDistanceFromEllipse soliloquy:", () => {
    test.each([
        [5, 5], //Point is completely within testEllipse
        [5, 2],
        [8, 3],
    ])(
        "Distance between Ellipse with center (5, 5) and {radX, radY} = 10 and Point (%f, %f) should be less than 0.",
        (x, y) => {
            expect(signedDistanceFromEllipse(testEllipse, new Point(x, y))).toBeLessThan(0);
        }
    );

    test.each([
        [20, 20], //Point is completely outside testEllipse
        [500, 20000],
        [8.0, 308.1],
    ])(
        "Distance between Ellipse with center (5, 5) and {radX, radY} = 10 and Point (%f, %f) should be greater than 0.",
        (x, y) => {
            expect(signedDistanceFromEllipse(testEllipse, new Point(x, y))).toBeGreaterThan(0);
        }
    );

    test.each([
        [5 - Math.sqrt(50), 5 - Math.sqrt(50)], //Point is on testEllipse
        [5, 15],
        [5, -5],
    ])(
        "Distance between Ellipse with center (5, 5) and {radX, radY} = 10 and Point (%f, %f) should be 0.",
        (x, y) => {
            expect(signedDistanceFromEllipse(testEllipse, new Point(x, y))).toBeCloseTo(0);
        }
    );
});

describe("AEGUtils getEllipsePoints soliloquy:", () => {
    test("Ellipse of center (5, 5) and {radX, radY} = 10 should have appropriate curve points.", () => {
        const curvePoints: Point[] = getEllipsePoints(testEllipse);
        expect(curvePoints[0]).toStrictEqual(new Point(15, 5));
        expect(curvePoints[90].x).toBeCloseTo(5);
        expect(curvePoints[90].y).toBeCloseTo(15);
        expect(curvePoints[180]).toStrictEqual(new Point(-5, 5));
        expect(curvePoints[270].x).toBeCloseTo(5);
        expect(curvePoints[270].y).toBeCloseTo(-5);
    });
});
