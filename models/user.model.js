module.exports = (sequelize, type) => {
    return sequelize.define(
        "user", {
            id: {
                type: type.BIGINT(20),
                primaryKey: true,
                autoIncrement: true
            },
            first_name: type.STRING,
            last_name: type.STRING,
            email: type.STRING,
            gender: type.ENUM("M", "F")
        }, {
            timestamps: true
        }
    );
};