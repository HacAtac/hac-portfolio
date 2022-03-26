import express from "express";
import contactMe from "../controllers/message-controller.js";
const router = express.Router();
/**
 * @description adminRoutes
 * @access      Public
 * @route       POST /contact
 *
 */

/**
 * @COMMENTS
 */
//
//

router.route("/success").post(contactMe);

export default router;
