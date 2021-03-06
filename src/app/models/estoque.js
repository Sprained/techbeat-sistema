import Sequelize, { Model } from 'sequelize';

class estoque extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            produtoID: Sequelize.INTEGER,
            quantidade: Sequelize.INTEGER
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.produto, { foreignKey: 'produtoID', as: 'produto' });
    }
}

export default estoque;